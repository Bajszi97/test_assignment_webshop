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
    ){
    }

    public function getDefinition(): array
    {
        return [
            'type' => $this->registry->get('category'),
            'args' => [
                'name' => [
                    'type' => Type::nonNull(Type::string()),
                    'description' => 'The name of the category.',
                ],
            ],
            'resolve' => fn ($rootValue, array $args): array => $this->repo->createFromName($args['name'])->toArray(),
        ];
    }
}