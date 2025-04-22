<?php

use Doctrine\DBAL\DriverManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMSetup;

return function () {
    $config = ORMSetup::createAttributeMetadataConfiguration(
        paths: [__DIR__ . '/../app/Models'],
        isDevMode: $_ENV['APP_DEBUG'],
    );

    /**
     * The Database connection configurations, they should be set in the .env file.
     */
    $dbParams = [
        'driver' => $_ENV['DB_DRIVER'],
        'host' => $_ENV['DB_HOST'],
        'port' => $_ENV['DB_PORT'],
        'dbname' => $_ENV['DB_DATABASE'],
        'user' => $_ENV['DB_USER'],
        'password' => $_ENV['DB_PASSWORD'],
    ];

    $conn = DriverManager::getConnection($dbParams, $config);

    return new EntityManager($conn, $config);
};
