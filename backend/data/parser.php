<?php

const SOURCE = "data.json";
const TARGET = "parsedData.json";

$data = json_decode(file_get_contents(SOURCE), true);
$data = $data['data'];

$categories = array_map(fn ($i) => ['slug' => $i['name'], 'name' => ucfirst($i['name'])], $data['categories']);
$parsedData = ['categories' => $categories];


$parsedProducts = sanitizeArray($data['products']);
$parsedData['products'] = $parsedProducts;

file_put_contents(TARGET, json_encode($parsedData));

function sanitizeArray($array): array {
    foreach ($array as $key => $value) {
        if($key === "__typename"){
            unset($array[$key]);
        }
        if($key === "id"){
            $array['slug'] = str_replace(" ", "-", strtolower($array[$key]));
            unset($array[$key]);
        }
        if(is_array($value)){
            $array[$key] = sanitizeArray($value);
        }
    }
    return $array;
} 