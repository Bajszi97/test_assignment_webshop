<?php

namespace App\GraphQL\Mutations;

use App\GraphQL\FieldDefinition;
use App\GraphQL\TypeRegistry;
use App\Models\Category;
use App\Repositories\CategoryRepository;
use GraphQL\Type\Definition\Type;

class CreateCategory implements FieldDefinition
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
                'name' => Type::nonNull(Type::string()),
            ],
            'resolve' => fn($rootValue, array $args): object => $this->repo->createAndSave($args)->toDTO(),
        ];
    }
}