<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

final class MutationType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'fields' => [
                'sum' => [
                    'type' => Type::int(),
                    'args' => [
                        'x' => ['type' => Type::int()],
                        'y' => ['type' => Type::int()],
                    ],
                    'resolve' => fn ($rootValue, array $args): int => $args['x'] + $args['y'], 
                ]
            ],
        ]);
    }
}
