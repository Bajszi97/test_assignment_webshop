<?php

namespace App\GraphQL\Queries;

use App\GraphQL\FieldDefinition;
use App\GraphQL\TypeRegistry;
use App\Repositories\ProductRepository;
use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;

class GetProducts implements FieldDefinition
{

    public function __construct(
        protected ProductRepository $repo,
        protected TypeRegistry $registry
    ) {
    }

    public function getDefinition(): array
    {
        return [
            'type' => Type::listOf($this->registry->get('product')),
            'args' => [
                'filters' => [
                    'type' => new InputObjectType([
                        'name' => "ProductFilters",
                        'fields' => [
                            'category' => Type::string(),
                        ]
                    ])
                ]
            ],
            'resolve' => fn($rootValue, $args): array => array_map(
                fn($e): object => $e->toDTO(),
                $this->repo->findByFilters($args['filters']?? [])
            ),
        ];
    }
}