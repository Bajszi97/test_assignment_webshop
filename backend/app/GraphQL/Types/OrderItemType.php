<?php

namespace App\GraphQL\Types;

use App\GraphQL\TypeRegistry;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

final class OrderItemType extends ObjectType
{
    public function __construct(TypeRegistry $registry)
    {
        parent::__construct([
            'fields' => [
                'quantity' => Type::int(),
                'product' => [
                    'type' => $registry->get('product'),
                    'resolve' => fn(object $orderItem): object => $orderItem->product->toDTO(),
                ],
                'attributes' => [
                    'type' => Type::listOf($registry->get('orderItemAttribute')),
                    'resolve' => fn(object $orderItem): iterable =>
                        $orderItem->attributes?->map(fn($i): object => $i->toDTO()) ?? [],
                ],
            ],
        ]);
    }
}
