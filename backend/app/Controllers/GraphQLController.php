<?php

namespace App\Controllers;

use App\Core\Controller;
use App\GraphQL\GraphQLHandler;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class GraphQLController extends Controller
{
    public function handle(
        ResponseFactoryInterface $responseFactory,
        ServerRequestInterface $request,
        GraphQLHandler $graphQLHandler
    ): ResponseInterface {
        $result = $graphQLHandler->handle($request);
        $response = $responseFactory->createResponse(200);
        $response = $response->withHeader('content-type', 'application/json');
        $response->getBody()->write(json_encode($result));
        return $response;
    }
}
