<?php

namespace App\Core;

use App\Core\Contracts\MiddlewareServiceProvider;
use App\Core\Contracts\ResponseEmitterInterface;
use DI\Container;
use Nyholm\Psr7Server\ServerRequestCreator;
use Psr\Http\Message\ServerRequestInterface;

class Application
{

    public function __construct(
        private MiddlewareServiceProvider $middlewareDispatcher,
        private ServerRequestCreator $serverRequestCreator,
        private ResponseEmitterInterface $responseEmitter,
        private Container $container,
    ) {
    }

    public function run(): void {
        $response = $this->middlewareDispatcher->dispatch($this->getRequest());
        $this->responseEmitter->emit($response);
    }

    private function getRequest(): ServerRequestInterface
    {
        $request = $this->serverRequestCreator->fromGlobals();
        $this->container->set(ServerRequestInterface::class, $request);
        return $request;
    }

    public static function dd(mixed ...$content): void
    {
        dump(...$content);
        die();
    }
}