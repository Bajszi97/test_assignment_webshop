<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

final class ImageType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'fields' => [
                'url' => Type::string(),
            ],
        ]);
    }
}
