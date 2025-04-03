<?php

namespace App\Core\Contracts;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

interface RouteServiceProvider
{
    public function process(RequestInterface $request): ResponseInterface;
}
