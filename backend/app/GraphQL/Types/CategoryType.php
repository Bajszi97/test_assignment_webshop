<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

final class CategoryType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'fields' => [
                'slug' => Type::string(),
                'name' => Type::string(),
            ],
        ]);
    }
}
