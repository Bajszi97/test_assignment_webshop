<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

final class CurrencyType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'fields' => [
                'id' => Type::int(),
                'label' => Type::string(),
                'symbol' => Type::string(),
            ],
        ]);
    }
}
