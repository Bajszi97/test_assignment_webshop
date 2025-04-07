<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

final class QueryType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'fields' => [
                'echo' => [
                    'type' => Type::string(),
                    'args' => [
                        'message' => [
                            'type' => Type::nonNull(Type::string()),
                        ],
                    ],
                    'resolve' => fn($rootValue, array $args): string => $args['message'],
                ],
            ],
        ]);
    }
}
