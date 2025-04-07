<?php

namespace App\GraphQL;

use DI\Container;
use Exception;
use GraphQL\Type\Definition\ObjectType;

class MutationRegistry
{
    protected const BASE_NAMESPACE = 'App\\GraphQL\\Mutations';
    protected array $mutations = [];

    public function __construct(private Container $container)
    {
    }

    public function get(string $name): array
    {
        return $this->resolve($name)->getDefinition();
    }

    protected function resolve(string $name): FieldDefinition
    {
        $key = strtolower($name);

        if (!isset($this->mutations[$key])) {
            $class = self::BASE_NAMESPACE . '\\' . ucfirst($name);

            if (!class_exists($class)) {
                throw new Exception("GraphQL type can not be resolved: $name");
            }

            $this->mutations[$key] = $this->container->get($class);
        }
        return $this->mutations[$key];
    }
}