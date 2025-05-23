<?php

namespace App\GraphQL\Types;

use App\GraphQL\MutationRegistry;
use GraphQL\Type\Definition\ObjectType;

final class MutationType extends ObjectType
{
    public function __construct(MutationRegistry $registry)
    {
        parent::__construct([
            'fields' => [
                'createCategory' => $registry->get('createCategory'),
                'createProduct' => $registry->get('createProduct'),
                'createOrder' => $registry->get('createOrder'),
            ],
        ]);
    }
}
