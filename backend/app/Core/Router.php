<?php

namespace App\Core;

use App\Core\Contracts\RouteServiceProvider;
use App\Core\Exceptions\MethodNotAllowed;
use App\Core\Exceptions\RouteNotFound;
use DI\Container;
use Exception;
use FastRoute\Dispatcher;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
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
                [$controller, $method] = $handler;
                return $this->container->get($controller)->$method();

            case Dispatcher::NOT_FOUND:
                throw new RouteNotFound;

            case Dispatcher::METHOD_NOT_ALLOWED:
                // TODO send Allow: header
                $allowed = $routeInfo[1];
                throw new MethodNotAllowed;

            default:
                throw new Exception("Routing error.");
        }
    }

}
