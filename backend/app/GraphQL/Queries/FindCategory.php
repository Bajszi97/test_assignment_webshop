<?php

namespace App\GraphQL\Queries;

use App\GraphQL\FieldDefinition;
use App\GraphQL\TypeRegistry;
use App\Repositories\CategoryRepository;
use GraphQL\Type\Definition\Type;

class FindCategory implements FieldDefinition
{
    public function __construct(
        protected CategoryRepository $repo,
        protected TypeRegistry $registry
    ) {
    }

    public function getDefinition(): array
    {
        return [
            'type' => $this->registry->get('category'),
            'args' => [
                'slug' => Type::nonNull(Type::string()),
            ],
            'resolve' => fn($rootValue, $args): object => $this->repo->findOneBySlug($args['slug'])->toDTO(),
        ];
    }
}
