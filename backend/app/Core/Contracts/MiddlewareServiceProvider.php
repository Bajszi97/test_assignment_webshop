<?php

namespace App\Core\Contracts;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

interface MiddlewareServiceProvider
{
    public function dispatch(RequestInterface $request): ResponseInterface;
}
