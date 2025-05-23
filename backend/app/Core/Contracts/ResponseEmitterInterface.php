<?php

namespace App\Core\Contracts;

use Psr\Http\Message\ResponseInterface;

interface ResponseEmitterInterface
{
    public function emit(ResponseInterface $response): void;
}
