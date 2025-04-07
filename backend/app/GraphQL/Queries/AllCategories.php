<?php

namespace App\GraphQL\Queries;

use App\GraphQL\FieldDefinition;
use App\GraphQL\TypeRegistry;
use App\Repositories\CategoryRepository;
use GraphQL\Type\Definition\Type;

class AllCategories implements FieldDefinition 
{

    public function __construct(
        protected CategoryRepository $repo,
        protected TypeRegistry $registry
    ){
    }

    public function getDefinition(): array
    {
        return [
            'type' => Type::listOf($this->registry->get('category')),
            'resolve' => fn(): array => array_map(fn ($e) => $e->toArray(),$this->repo->findAll()),
        ];
    }
}