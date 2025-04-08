<?php

namespace App\GraphQL\Mutations;

use App\GraphQL\FieldDefinition;
use App\GraphQL\TypeRegistry;
use App\Repositories\AttributeSetRepository;
use GraphQL\Type\Definition\Type;

class CreateAttributeSet implements FieldDefinition
{

    public function __construct(
        protected AttributeSetRepository $repo,
        protected TypeRegistry $registry
    ) {
    }

    public function getDefinition(): array
    {
        return [
            'type' => $this->registry->get('attributeSet'),
            'args' => [
                'slug' => [
                    'type' => Type::nonNull(Type::string()),
                    'description' => 'The slug referring the attribute group.',
                ],
                'name' => [
                    'type' => Type::nonNull(Type::string()),
                    'description' => 'The name of the attribute group.',
                ],
                'type' => [
                    'type' => Type::nonNull(Type::string()),
                    'description' => 'The type of the attribute group.',
                ],
            ],
            'resolve' => fn($rootValue, array $args): object => $this->repo->createAndSave($args)->toDTO(),
        ];
    }
}