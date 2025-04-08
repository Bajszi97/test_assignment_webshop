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
                'category' => [
                    'type' => Type::nonNull(Type::string()),
                    'description' => "The slug referring the product's category.",
                ],
                'price' => [
                    'type' => new InputObjectType([
                        'name' => 'PriceInput',
                        'fields' => [
                            'amount' => [
                                'type' => Type::nonNull(Type::int()),
                                'description' => "The amount on the price tag",
                            ],
                            'currency' => [
                                'type' => Type::nonNull(Type::string()),
                                'description' => "The ISO 4217 currency code (e.g. EUR, USD)",
                            ],
                        ]
                    ]),
                    'description' => "The product's price.",
                ],
                'images' => [
                    'type' => Type::listOf(new InputObjectType([
                        'name' => 'ImageInput',
                        'fields' => [
                            'url' => [
                                'type' => Type::nonNull(Type::string()),
                                'description' => "The URL of the image",
                            ],
                        ]
                    ])),
                    'description' => "The product's images.",
                ],
                'variants' => [
                    'type' => Type::listOf(new InputObjectType([
                        'name' => 'ProductVariantInput',
                        'fields' => [
                            'attributes' => Type::listOf(new InputObjectType([
                                'name' => 'ProductAttributeValueInput',
                                'fields' => [
                                    'attributeSet' => [
                                        'type' => Type::nonNull(Type::string()),
                                        'description' => "The attribute set to which the attribute value belongs.",
                                    ],
                                    'value' => [
                                        'type' => Type::nonNull(Type::string()),
                                        'description' => "The attribute's value.",
                                    ],
                                    'displayValue' => [
                                        'type' => Type::nonNull(Type::string()),
                                        'description' => "The attribute's value to be displayed.",
                                    ],
                                ]
                            ])),
                        ]
                    ])),
                    'description' => "The different product variants.",
                ],
            ],
            'resolve' => fn($rootValue, array $args): object => $this->repo->createAndSave($args)->toDTO(),
        ];
    }
}