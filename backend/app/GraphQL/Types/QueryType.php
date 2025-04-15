<?php

namespace App\GraphQL\Types;

use App\GraphQL\QueryRegistry;
use GraphQL\Type\Definition\ObjectType;

final class QueryType extends ObjectType
{
    public function __construct(QueryRegistry $registry)
    {
        parent::__construct([
            'fields' => [
                'getCategories' => $registry->get('getCategories'),
                'getProducts' => $registry->get('getProducts'),
                'getOrders' => $registry->get('getOrders'),
                'findProduct' => $registry->get('findProduct'),
                'findCategory' => $registry->get('findCategory'),
            ],
        ]);
    }
}
