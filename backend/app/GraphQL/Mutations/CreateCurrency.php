<?php

namespace App\GraphQL\Mutations;

use App\GraphQL\FieldDefinition;
use App\GraphQL\TypeRegistry;
use App\Repositories\CurrencyRepository;
use GraphQL\Type\Definition\Type;

class CreateCurrency implements FieldDefinition
{

    public function __construct(
        protected TypeRegistry $registry,
        protected CurrencyRepository $repo
    ) {
    }

    public function getDefinition(): array
    {
        return [
            'type' => $this->registry->get('currency'),
            'args' => [
                'label' => [
                    'type' => Type::nonNull(Type::string()),
                    'description' => 'The label of the currency (ISO 4217 currency code).',
                ],
                'symbol' => [
                    'type' => Type::nonNull(Type::string()),
                    'description' => 'The symbol of the currency.',
                ],
            ],
            'resolve' => fn($rootValue, array $args): array => $this->repo->createAndSave($args)->toArray(),
        ];
    }
}