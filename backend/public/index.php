<?php

use App\Core\Application;
use App\Core\Config;
use DI\ContainerBuilder;

require "./../app/bootstrap.php";

$builder = new ContainerBuilder();
$builder->addDefinitions(Config::get('services'));
$container = $builder->build();
$app = $container->get(Application::class);

$app->run();
