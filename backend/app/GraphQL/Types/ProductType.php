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
                'slug' => Type::string(),
                'name' => Type::string(),
                'inStock' => Type::boolean(),
                'description' => Type::string(),
                'brand' => Type::string(),
                'category' => [
                    'type' => $registry->get('category'),
                    'resolve' => fn(object $product): object => $product->category->toDTO()
                ],
                'prices' => [
                    'type' => Type::listOf($registry->get('price')),
                    'resolve' => fn(object $product): object => $product->prices->map(fn($i): object => $i->toDTO())
                ],
                'gallery' => [
                    'type' => Type::listOf(Type::string()),
                    'resolve' => fn(object $product): ?object => $product->images->map(fn($i): object => $i->toUrl())
                ],
                'mainImage' => [
                    'type' => Type::string(),
                    'resolve' => fn(object $product): ?string => ($mainImage = $product->images->first())? $mainImage->toUrl() : null
                ],
            ],
        ]);
    }
}
