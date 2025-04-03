<?php

namespace App\Controllers;

use App\Core\Controller;
use Psr\Http\Message\ResponseInterface;

class HomeController extends Controller {
    public function index(): ResponseInterface {
        $response = $this->responseFactory->createResponse(200);
        $response->getBody()->write("Welcome Home!");
        return $response;
    }
}
