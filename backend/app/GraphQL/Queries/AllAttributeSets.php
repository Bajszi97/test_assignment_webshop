<?php

namespace App\GraphQL\Queries;

use App\GraphQL\FieldDefinition;
use App\GraphQL\TypeRegistry;
use App\Repositories\AttributeSetRepository;
use GraphQL\Type\Definition\Type;

class AllAttributeSets implements FieldDefinition 
{

    public function __construct(
        protected AttributeSetRepository $repo,
        protected TypeRegistry $registry
    ){
    }

    public function getDefinition(): array
    {
        return [
            'type' => Type::listOf($this->registry->get('attributeSet')),
            'resolve' => fn(): array => array_map(fn ($e): object => $e->toDTO(),$this->repo->findAll()),
        ];
    }
}