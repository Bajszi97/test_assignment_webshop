<?php

namespace App\GraphQL;

use DI\Container;
use Exception;

class QueryRegistry
{
    protected const BASE_NAMESPACE = 'App\\GraphQL\\Queries';
    protected array $queries = [];

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

        if (!isset($this->queries[$key])) {
            $class = self::BASE_NAMESPACE . '\\' . ucfirst($name);

            if (!class_exists($class)) {
                throw new Exception("GraphQL type can not be resolved: $name");
            }

            $this->queries[$key] = $this->container->get($class);
        }
        return $this->queries[$key];
    }
}
