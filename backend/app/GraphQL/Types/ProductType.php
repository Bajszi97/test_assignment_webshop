<?php

namespace App\GraphQL\Types;

use App\GraphQL\TypeRegistry;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

final class ProductType extends ObjectType
{
    public function __construct(TypeRegistry $registry)
    {
        parent::__construct([
            'fields' => [
                'id' => Type::int(),
                'sku' => Type::string(),
                'name' => Type::string(),
                'inStock' => Type::boolean(),
                'description' => Type::string(),
                'brand' => Type::string(),
                'category' => [
                    'type' => $registry->get('category'),
                    'resolve' => fn(object $product): object => $product->category->toDTO()
                ],
                'price' => [
                    'type' => $registry->get('price'),
                    'resolve' => fn(object $product): ?object => $product->price?->toDTO()
                ],
                'images' => [
                    'type' => Type::listOf($registry->get('image')),
                    'resolve' => fn(object $product): object => $product->images->map(fn($i): object => $i->toDTO())
                ],
            ],
        ]);
    }
}
