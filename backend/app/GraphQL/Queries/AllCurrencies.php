<?php

namespace App\GraphQL\Queries;

use App\GraphQL\FieldDefinition;
use App\GraphQL\TypeRegistry;
use App\Repositories\CurrencyRepository;
use GraphQL\Type\Definition\Type;

class AllCurrencies implements FieldDefinition 
{

    public function __construct(
        protected CurrencyRepository $repo,
        protected TypeRegistry $registry
    ){
    }

    public function getDefinition(): array
    {
        return [
            'type' => Type::listOf($this->registry->get('currency')),
            'resolve' => fn(): array => array_map(fn ($e): object => $e->toDTO(),$this->repo->findAll()),
        ];
    }
}