<?php

namespace App\GraphQL\Mutations;

use App\GraphQL\FieldDefinition;
use App\GraphQL\TypeRegistry;
use App\Repositories\CurrencyRepository;
use App\Repositories\ProductRepository;
use GraphQL\Type\Definition\Type;

class CreateProduct implements FieldDefinition
{

    public function __construct(
        protected TypeRegistry $registry,
        protected ProductRepository $repo
    ) {
    }

    public function getDefinition(): array
    {
        return [
            'type' => $this->registry->get('product'),
            'args' => [
                'sku' => [
                    'type' => Type::nonNull(Type::string()),
                    'description' => "A unique human readable identification string for the product.",
                ],
                'name' => [
                    'type' => Type::nonNull(Type::string()),
                    'description' => "The name of the product.",
                ],
                'inStock' => [
                    'type' => Type::nonNull(Type::boolean()),
                    'description' => "Indicating that the product is available.",
                ],
                'description' => [
                    'type' => Type::nonNull(Type::string()),
                    'description' => "The description of the product.",
                ],
                'brand' => [
                    'type' => Type::nonNull(Type::string()),
                    'description' => "The brand of the product.",
                ],
                'categoryId' => [
                    'type' => Type::nonNull(Type::int()),
                    'description' => "The id of the product's category.",
                ],
            ],
            'resolve' => fn($rootValue, array $args): object => $this->repo->createAndSave($args)->toDTO(),
        ];
    }
}