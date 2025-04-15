<?php

namespace App\GraphQL\Types;

use App\GraphQL\TypeRegistry;
use App\Repositories\AttributeSetRepository;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

final class OrderType extends ObjectType
{
    public function __construct(TypeRegistry $registry)
    {
        parent::__construct([
            'fields' => [
                'placedAt' => [
                    'type' => Type::string(),
                    'resolve' => fn(object $order): string => $order->placedAt->format(\DateTime::ATOM)
                ],
                'items' => [
                    'type' => Type::listOf($registry->get('orderItem')),
                    'resolve' => fn(object $order): iterable => $order->items->map(fn($i): object => $i->toDTO())
                ],
            ],
        ]);
    }
}
