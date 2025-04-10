<?php

namespace App\GraphQL\Queries;

use App\GraphQL\FieldDefinition;
use App\GraphQL\TypeRegistry;
use App\Repositories\CategoryRepository;
use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;

class GetCategories implements FieldDefinition
{

    public function __construct(
        protected CategoryRepository $repo,
        protected TypeRegistry $registry
    ) {
    }

    public function getDefinition(): array
    {
        return [
            'type' => Type::listOf($this->registry->get('category')),
            'args' => [
                'filters' => [
                    'type' => new InputObjectType([
                        'name' => "CategoryFilters",
                        'fields' => [
                            'slug' => Type::string(),
                            'name' => Type::string(),
                        ]
                    ])
                ]
            ],
            'resolve' => fn($rootValue, $args): array => array_map(
                fn($e): object => $e->toDTO(),
                $this->repo->findBy($args['filters'] ?? [])
            ),
        ];
    }
}