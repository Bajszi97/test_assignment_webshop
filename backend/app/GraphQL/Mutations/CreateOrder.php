<?php

namespace App\GraphQL\Mutations;

use App\GraphQL\FieldDefinition;
use App\GraphQL\TypeRegistry;
use App\Repositories\CategoryRepository;
use App\Repositories\OrderRepository;
use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;

class CreateOrder implements FieldDefinition
{

    public function __construct(
        protected OrderRepository $repo,
        protected TypeRegistry $registry
    ) {
    }

    public function getDefinition(): array
    {
        return [
            'type' => $this->registry->get('order'),
            'args' => [
                'input' => new InputObjectType([
                    'name' => "OrderInput",
                    'fields' => [
                        'items' => Type::nonNull(Type::listOf(new InputObjectType([
                            'name' => 'OrderItemInput',
                            'fields' => [
                                'quantity' => Type::nonNull(type: Type::int()),
                                'productSlug' => Type::nonNull(Type::string()),
                                'price' => Type::nonNull(new InputObjectType([
                                    'name' => 'OrderItemPriceInput',
                                    'fields' => [
                                        'amount' => Type::nonNull(Type::float()),
                                        'currency' => Type::nonNull(Type::string()),
                                    ]
                                ])),
                                'attributes' => Type::listOf(new InputObjectType([
                                    'name' => 'OrderItemAttributeInput',
                                    'fields' => [
                                        'setSlug' => Type::nonNull(Type::string()),
                                        'valueSlug' => Type::nonNull(Type::string()),
                                    ]
                                ]))
                            ]
                        ]))),
                    ]
                ]),
            ],
            'resolve' => fn($rootValue, array $args): object => $this->repo->createAndSave($args['input'])->toDTO(),
        ];
    }
}