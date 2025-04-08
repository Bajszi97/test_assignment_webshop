<?php

namespace App\GraphQL\Types;

use App\GraphQL\TypeRegistry;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

final class ProductVariantType extends ObjectType
{
    public function __construct(TypeRegistry $registry)
    {
        parent::__construct([
            'fields' => [
                'id' => Type::int(),
                'attributes' => [
                    'type' => Type::listOf($registry->get('attributeValue')),
                    'resolve' => fn(object $variant): object => $variant->attributes->map(fn($i): object => $i->toDTO())
                ],
            ],
        ]);
    }
}
