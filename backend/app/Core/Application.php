<?php

namespace App\Core;

use App\Core\Contracts\MiddlewareServiceProvider;
use DI\Container;
use Nyholm\Psr7Server\ServerRequestCreator;

class Application
{

    public function __construct(
        private MiddlewareServiceProvider $middlewareDispatcher,
        private ServerRequestCreator $serverRequestCreator,
        private Container $container,
    ) {
    }

    public function run(): void {
        $request = $this->serverRequestCreator->fromGlobals();
        $response = $this->middlewareDispatcher->dispatch($request);
        $this->dd($response);
    }

    public static function dd(mixed ...$content): void
    {
        dump(...$content);
        die();
    }
}