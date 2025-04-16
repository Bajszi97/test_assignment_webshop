<?php

namespace App\GraphQL\Queries;

use App\GraphQL\FieldDefinition;
use App\GraphQL\TypeRegistry;
use App\Repositories\OrderRepository;
use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;

class GetOrders implements FieldDefinition
{
    public function __construct(
        protected OrderRepository $repo,
        protected TypeRegistry $registry
    ) {
    }

    public function getDefinition(): array
    {
        return [
            'type' => Type::listOf($this->registry->get('order')),
            'resolve' => fn($rootValue, $args): array => array_map(
                fn($e): object => $e->toDTO(),
                $this->repo->findAll()
            ),
        ];
    }
}
