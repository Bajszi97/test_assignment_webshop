<?php

namespace App\GraphQL\Types;

use App\GraphQL\TypeRegistry;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use stdClass;

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
                'total' => [
                    'type' => $registry->get('price'),
                    'resolve' => function (object $order): object {
                        $priceDTO = new stdClass();
                        $priceDTO->amount = $order->total;
                        $priceDTO->currency = $order->currency;
                        return $priceDTO;
                    },
                ],
                'items' => [
                    'type' => Type::listOf($registry->get('orderItem')),
                    'resolve' => fn(object $order): iterable => $order->items->map(fn($i): object => $i->toDTO())
                ],
            ],
        ]);
    }
}
