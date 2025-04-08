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
                    'resolve' => fn (array $productArray): array => $productArray['category']->toArray()
                ],
            ],
        ]);
    }
}
