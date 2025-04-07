<?php

use Doctrine\ORM\Tools\Console\ConsoleRunner;
use Doctrine\ORM\Tools\Console\EntityManagerProvider\SingleManagerProvider;

require "./../app/bootstrap.php";

$emFactory = require('doctrine.php');
$entityManager = $emFactory();

$commands = [
    // Custom cli commands
];

ConsoleRunner::run(
    new SingleManagerProvider($entityManager),
    $commands
);