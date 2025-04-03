<?php

namespace App\Core;

use Psr\Http\Message\ResponseFactoryInterface;

abstract class Controller
{
    public function __construct(protected ResponseFactoryInterface $responseFactory)
    {
    }
}