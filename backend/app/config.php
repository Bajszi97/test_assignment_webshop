<?php

use App\Core\Contracts\ErrorHandlingProvider;
use App\Core\Contracts\MiddlewareServiceProvider;
use App\Core\Contracts\ResponseEmitterInterface;
use App\Core\Contracts\RouteServiceProvider;
use App\Core\ErrorHandler;
use App\Core\MiddlewareDispatcher;
use App\Core\Middlewares\ErrorHandlerMiddleware;
use App\Core\ResponseEmitter;
use App\Core\Router;
use App\Models\AttributeSet;
use App\Models\Category;
use App\Repositories\AttributeSetRepository;
use App\Repositories\CategoryRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use JMS\Serializer\SerializerBuilder;
use JMS\Serializer\SerializerInterface;
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
use function DI\factory;

return [
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
        ResponseEmitterInterface::class => create(ResponseEmitter::class),
        EntityManagerInterface::class => factory(require('doctrine.php')),
        SerializerInterface::class => factory(fn () => SerializerBuilder::create()->build()),
        
        // Registering repos
        CategoryRepository::class => factory(doctrineRepository(Category::class)),
        AttributeSetRepository::class => factory(doctrineRepository(AttributeSet::class)),
    ],

    /**
     * The registered middlewares are executed in a bottom-up order.
     */
    'middlewares' => [
        ErrorHandlerMiddleware::class,
    ]
];

function doctrineRepository(string $entityClass): \Closure {
    return function (EntityManagerInterface $em) use ($entityClass) {
        return $em->getRepository($entityClass);
    };
}