<?php

namespace App\Core;

use App\Core\Contracts\MiddlewareServiceProvider;
use DI\Container;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

class MiddlewareDispatcher implements MiddlewareServiceProvider
{
    private RequestHandlerInterface $outerMiddleware;

    public function __construct(
        private Kernel $kernel,
        private Container $container
    ) {
        $this->registerMiddlewares();
    }

    private function registerMiddlewares(): void
    {
        $this->outerMiddleware = $this->kernel;

        $middlewares = Config::get('middlewares');

        foreach ($middlewares as $key => $middlewareClass) {
            $next = $this->outerMiddleware;
            $middleware = $this->container->get($middlewareClass);
            $this->outerMiddleware = new class ($middleware, $next) implements RequestHandlerInterface {
                public function __construct(
                    private MiddlewareInterface $middleware,
                    private RequestHandlerInterface $next
                ) {
                }
                public function handle(RequestInterface $request): ResponseInterface
                {
                    return $this->middleware->process($request, $this->next);
                }
            };
        }
    }

    public function dispatch(RequestInterface $request): ResponseInterface {
        return $this->outerMiddleware->handle($request);
    }
}
