<?php

namespace App\GraphQL;

use App\Core\Application;
use App\Core\Config;
use GraphQL\GraphQL;
use GraphQL\Type\Schema;
use GraphQL\Type\SchemaConfig;
use Psr\Http\Message\ServerRequestInterface;

class GraphQLHandler
{
    protected bool $debug = false;
    public function __construct(protected TypeRegistry $registry)
    {
        $this->debug = Config::get('error_handling.debug');
    }

    public function handle(ServerRequestInterface $request): array
    {
        [$source, $variables] = $this->getQuery($request);
        return GraphQL::executeQuery(
            schema: $this->getSchema(),
            source: $source,
            variableValues: $variables
        )->toArray($this->debug);
    }

    private function getSchema(): Schema
    {
        // TODO: investigate this weird type missmatch
        $config = SchemaConfig::create()
            ->setQuery($this->registry->get('query'))
            ->setMutation($this->registry->get('mutation'));
        return new Schema($config);
    }

    private function getQuery(ServerRequestInterface $request): array
    {
        // TODO: better error handling
        $data = json_decode($request->getBody()->getContents(), true);
        return [$data['query'], $data['variables'] ?? []];
    }
}
