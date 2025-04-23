<?php

const URL = "http://nginx/graphql";
const SOURCE = "parsedData.json";

const CREATE_CATEGORY_GPQ = '
mutation CreateCategory($slug: String!, $name: String!) {
  createCategory(slug: $slug, name: $name) {
    slug
  }
}';

const CREATE_PRODUCT_GPQ = '
mutation CreateProduct($input: ProductInput!) {
  createProduct(input: $input) {
    slug
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

  echo $response? $response : curl_error($ch);
};
