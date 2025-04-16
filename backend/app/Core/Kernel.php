<?php

namespace App\Core;

use App\Core\Contracts\RouteServiceProvider;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Server\RequestHandlerInterface;

class Kernel implements RequestHandlerInterface
{
    public function __construct(private RouteServiceProvider $router)
    {
    }

    public function handle(RequestInterface $request): ResponseInterface
    {
        return $this->router->process($request);
    }
}
