<?php

use App\Core\Application;
use App\Core\Config;
use DI\Container;
use DI\ContainerBuilder;

require __DIR__.'/../vendor/autoload.php';

Config::load();
$builder = new ContainerBuilder();
$builder->addDefinitions(Config::get('services'));
$container = $builder->build();
$app = $container->get(Application::class);

$app->run();
