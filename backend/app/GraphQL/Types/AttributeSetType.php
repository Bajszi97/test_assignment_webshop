<?php

namespace App\GraphQL\Types;

use App\GraphQL\TypeRegistry;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

final class AttributeSetType extends ObjectType
{
    public function __construct(TypeRegistry $registry)
    {
        parent::__construct([
            'fields' => [
                'slug' => Type::string(),
                'name' => Type::string(),
                'type' => Type::string(),
                'items' => Type::listOf($registry->get('attributeValue')),
            ],
        ]);
    }
}
