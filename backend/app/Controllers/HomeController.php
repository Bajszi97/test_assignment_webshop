<?php

namespace App\Controllers;

use App\Core\Controller;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class HomeController extends Controller
{

    public function index(ResponseFactoryInterface $responseFactory, ServerRequestInterface $request): ResponseInterface
    {
        $response = $responseFactory->createResponse(200);
        $response = $response->withHeader('content-type', 'application/json');
        $response->getBody()->write(json_encode($request->getQueryParams()));
        return $response;
    }
}
