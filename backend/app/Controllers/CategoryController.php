<?php

namespace App\Controllers;

use App\Core\Application;
use App\Core\Controller;
use App\Repositories\CategoryRepository;
use JMS\Serializer\SerializerInterface;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class CategoryController extends Controller
{
    public function index(
        ResponseFactoryInterface $responseFactory,
        CategoryRepository $categoryRepository,
        SerializerInterface $serializer
    ): ResponseInterface {
        $categories = $categoryRepository->findAll();
        $response = $responseFactory->createResponse(200);
        $response = $response->withHeader('content-type', 'application/json');
        $response->getBody()->write($serializer->serialize($categories, 'json'));
        return $response;
    }

    public function store(
        ResponseFactoryInterface $responseFactory,
        CategoryRepository $categoryRepository,
        ServerRequestInterface $request
    ): ResponseInterface {
        $name = $request->getParsedBody()['name'] ?? '';
        $category = $categoryRepository->createFromName($name);
        $response = $responseFactory->createResponse(200);
        $response = $response->withHeader('content-type', 'application/json');
        $response->getBody()->write(json_encode($category->toName()));
        return $response;
    }
}
