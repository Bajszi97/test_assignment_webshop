<?php

namespace App\GraphQL\Queries;

use App\GraphQL\FieldDefinition;
use App\GraphQL\TypeRegistry;
use App\Repositories\ProductRepository;
use GraphQL\Type\Definition\Type;

class AllProducts implements FieldDefinition 
{

    public function __construct(
        protected ProductRepository $repo,
        protected TypeRegistry $registry
    ){
    }

    public function getDefinition(): array
    {
        return [
            'type' => Type::listOf($this->registry->get('product')),
            'resolve' => fn(): array => array_map(fn ($e) => $e->toArray(),$this->repo->findAll()),
        ];
    }
}