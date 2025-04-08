<?php

namespace App\GraphQL\Types;

use App\GraphQL\TypeRegistry;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

final class AttributeValueType extends ObjectType
{
    public function __construct(TypeRegistry $registry)
    {
        parent::__construct([
            'fields' => [
                'value' => Type::string(),
                'displayValue' => Type::string(),
                'attributeSet' => [
                    'type' => $registry->get('attributeSet'),
                    'resolve' => fn(object $attribute): object => $attribute->attributeSet->toDTO()
                ],
            ],
        ]);
    }
}
