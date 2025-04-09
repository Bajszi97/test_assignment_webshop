<?php

const URL = "http://nginx:8000/graphql";
const SOURCE = "parsedData.json";

const CREATE_CATEGORY_GPQ = '
mutation CreateCategory($slug: String!, $name: String!) {
  createCategory(slug: $slug, name: $name) {
    slug
  }
}';

const CREATE_CURRENCY_GPQ = '
mutation CreateCurrency($label: String!, $symbol: String!) {
  createCurrency(label: $label, symbol: $symbol) {
    label
  }
}';

const CREATE_ATTRIBUTE_SET_GPQ = '
mutation CreateAttributeSet($slug: String!, $name: String!, $type: String!) {
  createAttributeSet(slug: $slug, name: $name, type: $type) {
    slug
  }
}';

const CREATE_PRODUCT_GPQ = '
mutation CreateProduct($input: ProductInput!) {
  createProduct(input: $input) {
    sku
    name
  }
}';


$data = json_decode(file_get_contents(SOURCE));

foreach ($data->categories as $category) {
  $payload = json_encode([
    'query' => CREATE_CATEGORY_GPQ,
    'variables' => $category,
  ]);
  sendPayload($payload);
}

foreach ($data->currencies as $currency) {
  $payload = json_encode([
    'query' => CREATE_CURRENCY_GPQ,
    'variables' => $currency,
  ]);
  sendPayload($payload);
}

foreach ($data->attributeSets as $attributeSet) {
  $payload = json_encode([
    'query' => CREATE_ATTRIBUTE_SET_GPQ,
    'variables' => $attributeSet,
  ]);
  sendPayload($payload);
}

foreach ($data->products as $product) {
  $payload = json_encode([
    'query' => CREATE_PRODUCT_GPQ,
    'variables' => ['input' => $product],
  ]);
  sendPayload($payload);
}


function sendPayload(string $payload){
  $ch = curl_init(URL);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
  curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Content-Length: ' . strlen($payload)
  ]);
  
  $response = curl_exec($ch);
  curl_close($ch);

  echo $response;
};
