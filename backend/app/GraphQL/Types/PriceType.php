<?php

namespace App\GraphQL\Types;

use App\GraphQL\TypeRegistry;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

final class PriceType extends ObjectType
{
    public function __construct(TypeRegistry $registry)
    {
        parent::__construct([
            'fields' => [
                'amount' => Type::int(),
                'currency' => [
                    'type' => $registry->get('currency'),
                    'resolve' => fn (object $price): ?object => $price->currency->toDTO()
                ],
            ],
        ]);
    }
}
