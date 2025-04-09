<?php

const SOURCE = "data.json";
const TARGET = "parsedData.json";

$data = json_decode(file_get_contents(SOURCE));
$data = $data->data;

$categories = array_map(fn ($i) => ['slug' => $i->name, 'name' => ucfirst($i->name)], $data->categories);
$parsedData = ['categories' => $categories];

$currencies = [];
$attributeSets = [];

foreach ($data->products as $product) {
    $parsedProducts[] = [
        'sku' => $product->id,
        'name' => $product->name,
        'inStock' => $product->inStock,
        'description' => $product->description,
        'brand' => $product->brand,
        'category' => $product->category,
        'images' => array_map(fn($i) => ['url' => $i], $product->gallery),
        'price' => parsePrice($product, $currencies),
        'variants' => parseProductVariants($product, $attributeSets),
    ];
}

$parsedData['currencies'] = $currencies;
$parsedData['attributeSets'] = $attributeSets;
$parsedData['products'] = $parsedProducts;

file_put_contents(TARGET, json_encode($parsedData));

function parsePrice($product, &$sack): array
{   
    $amount = $product->prices[0]->amount;
    $currency = $product->prices[0]->currency->label;

    if(!in_array($currency, array_column($sack, 'label'))) {
        $sack[] = ['label' => $currency, 'symbol' => $product->prices[0]->currency->symbol];
    }

    return ['amount' => $amount, 'currency' => $currency];
}


function parseProductVariants($product, &$sack): array
{
    $sets = $product->attributes;
    $attributeSetParsedValues = [];

    foreach ($sets as $set) {
        $attributeSet = [
            'slug' => str_replace(" ", "-",lcfirst($set->name)),
            'name' => $set->name,
            'type' => $set->type,
        ];

        if(!in_array($attributeSet['slug'], array_column($sack, 'slug'))) {
            $sack[] = $attributeSet;
        }
        $setParsedValues = [];
        foreach ($set->items as $attributeValue) {
            $setParsedValues[] = [
                'value' => $attributeValue->value,
                'displayValue' => $attributeValue->displayValue,
                'attributeSet' => $attributeSet['slug'],
            ];
        }

        $attributeSetParsedValues[] = $setParsedValues;
    }

    $productVariants = cartesianProduct($attributeSetParsedValues);

    $productVariants = array_map(function ($variant) {
        return ['attributes' => $variant];
    }, $productVariants);

    return $productVariants;
}

function cartesianProduct(array $arrays) {
    $result = [[]];
    
    foreach ($arrays as $array) {
        $temp = [];
        foreach ($result as $product) {
            foreach ($array as $item) {
                $temp[] = array_merge($product, [$item]);
            }
        }
        $result = $temp;
    }
    
    return $result;
}