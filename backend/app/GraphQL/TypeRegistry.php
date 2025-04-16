<?php

namespace App\GraphQL;

use DI\Container;
use Exception;
use GraphQL\Type\Definition\ObjectType;

class TypeRegistry
{
    protected const BASE_NAMESPACE = 'App\\GraphQL\\Types';
    protected array $types = [];

    public function __construct(private Container $container)
    {
    }

    public function get(string $name): ObjectType
    {
        return $this->resolve($name);
    }

    protected function resolve(string $name): ObjectType
    {
        $key = strtolower($name);

        if (!isset($this->types[$key])) {
            $class = self::BASE_NAMESPACE . '\\' . ucfirst($name) . 'Type';

            if (!class_exists($class)) {
                throw new Exception("GraphQL type can not be resolved: $name");
            }

            $this->types[$key] = $this->container->get($class);
        }
        return $this->types[$key];
    }
}
