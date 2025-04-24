<?php

namespace App\GraphQL\Queries;

use App\GraphQL\FieldDefinition;
use App\GraphQL\TypeRegistry;
use App\Repositories\ProductRepository;
use GraphQL\Type\Definition\Type;

class FindProduct implements FieldDefinition
{
    public function __construct(
        protected ProductRepository $repo,
        protected TypeRegistry $registry
    ) {
    }

    public function getDefinition(): array
    {
        return [
            'type' => $this->registry->get('product'),
            'args' => [
                'slug' => Type::nonNull(Type::string())
            ],
            'resolve' => fn($rootValue, $args): ?object => $this->repo->findOneBySlug($args['slug'])?->toDTO(),
        ];
    }
}
