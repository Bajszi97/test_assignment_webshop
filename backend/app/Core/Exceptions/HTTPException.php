<?php

namespace App\Core\Exceptions;

use Exception;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface;

abstract class HTTPException extends Exception
{
    protected $statusCode = 500;

    public function toResponse(ResponseFactoryInterface $responseFactory): ResponseInterface
    {
        $response = $responseFactory->createResponse($this->statusCode);
        $response->getBody()->write($this->message);
        return $response;
    }
}
