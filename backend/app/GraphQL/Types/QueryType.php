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
                'allAttributeSets' => $registry->get('allAttributeSets'),
                'allCurrencies' => $registry->get('allCurrencies'),
                'getProducts' => $registry->get('getProducts'),
            ],
        ]);
    }
}
