<?php

use App\Core\Contracts\ErrorHandlingProvider;
use App\Core\Contracts\MiddlewareServiceProvider;
use App\Core\Contracts\RouteServiceProvider;
use App\Core\ErrorHandler;
use App\Core\MiddlewareDispatcher;
use App\Core\Middlewares\ErrorHandlerMiddleware;
use App\Core\Router;
use Nyholm\Psr7\Factory\Psr17Factory;
use Nyholm\Psr7Server\ServerRequestCreator;
use Nyholm\Psr7Server\ServerRequestCreatorInterface;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ServerRequestFactoryInterface;
use Psr\Http\Message\StreamFactoryInterface;
use Psr\Http\Message\UploadedFileFactoryInterface;
use Psr\Http\Message\UriFactoryInterface;
use function DI\autowire;
use function DI\create;

return [

    /**
     * The Database connection configurations, they should be set in the .env file.
     */
    'db' => [
        'host' => $_ENV['DB_HOST'],
        'port' => $_ENV['DB_PORT'],
        'database' => $_ENV['DB_DATABASE'],
        'user' => $_ENV['DB_USER'],
        'password' => $_ENV['DB_PASSWORD'],
    ],

    /**
     * The error handling configurations.
     */
    'error_handling' => [
        'debug' => $_ENV['APP_DEBUG'],
        'log_file' => $_ENV['LOG_FILE']?? __DIR__."/../logs/errors.log",
    ],

    /**
     * The main service providers for the application, 
     * they can be replaced by custom classes implementing the corresponding interfaces.
     */
    'services' => [
        ErrorHandlingProvider::class => autowire(ErrorHandler::class),
        MiddlewareServiceProvider::class => autowire(MiddlewareDispatcher::class),
        RouteServiceProvider::class => autowire( Router::class),
        ServerRequestCreatorInterface::class => autowire(ServerRequestCreator::class),
        ServerRequestFactoryInterface::class => create(Psr17Factory::class),
        UriFactoryInterface::class => create(Psr17Factory::class),
        UploadedFileFactoryInterface::class => create(Psr17Factory::class),
        StreamFactoryInterface::class => create(Psr17Factory::class),
        ResponseFactoryInterface::class => create(Psr17Factory::class),
    ],

    /**
     * The registered middlewares are executed in a bottom-up order.
     */
    'middlewares' => [
        ErrorHandlerMiddleware::class,
    ]
];