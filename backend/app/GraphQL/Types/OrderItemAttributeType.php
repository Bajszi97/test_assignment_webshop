<?php

namespace App\GraphQL\Types;

use App\GraphQL\TypeRegistry;
use GraphQL\Type\Definition\ObjectType;

final class OrderItemAttributeType extends ObjectType
{
    public function __construct(TypeRegistry $registry)
    {
        parent::__construct([
            'fields' => [
                'attributeSet' => [
                    'type' => $registry->get('attributeSet'),
                    'resolve' => fn(object $attributeValue) => $attributeValue->attributeSet->toDTO(),
                ],
                'attributeValue' => [
                    'type' => $registry->get('attributeValue'),
                    'resolve' => fn(object $attributeValue) => $attributeValue,
                ],
            ],
        ]);
    }
}
