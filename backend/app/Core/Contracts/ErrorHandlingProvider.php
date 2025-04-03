<?php

namespace App\Core\Contracts;

use Psr\Http\Message\ResponseInterface;

interface ErrorHandlingProvider
{
    public function handle(Exception $exception): ResponseInterface;
}
