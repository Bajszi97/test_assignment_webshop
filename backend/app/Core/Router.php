<?php

namespace App\Core;

use App\Core\Contracts\RouteServiceProvider;
use App\Core\Exceptions\BadControllerMethodCall;
use App\Core\Exceptions\MethodNotAllowed;
use App\Core\Exceptions\RouteNotFound;
use Closure;
use DI\Container;
use Exception;
use FastRoute\Dispatcher;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use ReflectionFunction;

use function FastRoute\simpleDispatcher;

class Router implements RouteServiceProvider
{
    private $dispatcher;

    public function __construct(public Container $container)
    {
        $routeRegisterCallback = require(__DIR__ . "./../../routes/routes.php");
        $this->dispatcher = simpleDispatcher($routeRegisterCallback);
    }

    public function process(RequestInterface $request): ResponseInterface
    {
        $routeInfo = $this->dispatcher->dispatch(
            $request->getMethod(),
            $request->getUri()->getPath()
        );

        switch ($routeInfo[0]) {
            case Dispatcher::FOUND:
                [$status, $handler, $args] = $routeInfo;
                $handler = [new $handler[0](), $handler[1]];
                return $this->callControllerMethod($handler, $args);

            case Dispatcher::NOT_FOUND:
                throw new RouteNotFound();

            case Dispatcher::METHOD_NOT_ALLOWED:
                // TODO send Allow: header
                $allowed = $routeInfo[1];
                throw new MethodNotAllowed();

            default:
                throw new Exception("Routing error.");
        }
    }

    private function callControllerMethod(callable $callable, array $args = [])
    {
        $reflection = new ReflectionFunction(Closure::fromCallable($callable));
        $arguments = [];

        foreach ($reflection->getParameters() as $param) {
            $type = $param->getType();
            $name = $param->getName();

            if (array_key_exists($name, $args)) {
                $arguments[] = $args[$name];
            } elseif ($type && !$type->isBuiltin()) {
                $arguments[] = $this->container->get($type->getName());
            } elseif ($param->isDefaultValueAvailable()) {
                $arguments[] = $param->getDefaultValue();
            } else {
                throw new BadControllerMethodCall();
            }
        }

        return $callable(...$arguments);
    }
}
