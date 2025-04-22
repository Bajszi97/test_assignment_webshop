<?php

namespace App\Controllers;

use App\Core\Controller;
use App\GraphQL\GraphQLHandler;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class HomeController extends Controller
{
    public function handle(
        ResponseFactoryInterface $responseFactory,
    ): ResponseInterface {
        $response = $responseFactory->createResponse(200);
        $response->getBody()->write("Welcome Home!");
        return $response;
    }
}
