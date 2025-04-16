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
                'amount' => [
                    'type' => Type::float(),
                    'resolve' => fn (object $price): float => round($price->amount / 100, 2),
                ],
                'currency' => [
                    'type' => $registry->get('currency'),
                    'resolve' => fn (object $price): object => $price->currency->toDTO()
                ],
            ],
        ]);
    }
}
