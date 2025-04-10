<?php

namespace App\GraphQL\Mutations;

use App\GraphQL\FieldDefinition;
use App\GraphQL\TypeRegistry;
use App\Repositories\CurrencyRepository;
use App\Repositories\ProductRepository;
use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;

class CreateProduct implements FieldDefinition
{

    public function __construct(
        protected TypeRegistry $registry,
        protected ProductRepository $repo
    ) {
    }

    // TODO: refractor InputTypes
    public function getDefinition(): array
    {
        return [
            'type' => $this->registry->get('product'),
            'args' => [
                'input' => new InputObjectType([
                    'name' => "ProductInput",
                    'fields' => [
                        'slug' => Type::nonNull(Type::string()),
                        'name' => Type::nonNull(Type::string()),
                        'inStock' => Type::nonNull(Type::boolean()),
                        'description' => Type::nonNull(Type::string()),
                        'brand' => Type::nonNull(Type::string()),
                        'category' => Type::nonNull(Type::string()),
                        'prices' => Type::listOf(new InputObjectType([
                            'name' => 'PriceInput',
                            'fields' => [
                                'amount' => Type::nonNull(Type::float()),
                                'currency' => new InputObjectType([
                                    'name' => 'CurrencyInput',
                                    'fields' => [
                                        'label' => Type::nonNull(Type::string()),
                                        'symbol' => Type::nonNull(Type::string()),
                                    ]
                                ]),
                            ]
                        ])),
                        'gallery' => Type::listOf(type: Type::nonNull(Type::string())),
                        'attributes' => Type::listOf(new InputObjectType([
                            'name' => 'AttributeSetsInput',
                            'fields' => [
                                'items' => Type::nonNull(Type::listOf(new InputObjectType([
                                    'name' => 'AttributeValueInput',
                                    'fields' => [
                                        'slug' => Type::nonNull(Type::string()),
                                        'value' => Type::nonNull(Type::string()),
                                        'displayValue' => Type::nonNull(Type::string()),
                                    ]
                                ]))),
                                'slug' => Type::nonNull(type: Type::string()),
                                'name' => Type::nonNull(Type::string()),
                                'type' => Type::nonNull(Type::string()),
                            ]
                        ])),
                    ]
                ]),
            ],
            'resolve' => fn($rootValue, array $args): object => $this->repo->createAndSave($args['input'])->toDTO(),
        ];
    }
}