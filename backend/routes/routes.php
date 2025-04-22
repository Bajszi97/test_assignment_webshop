<?php

use App\Controllers\GraphQLController;
use App\Controllers\HomeController;

return function (FastRoute\RouteCollector $r) {
    $r->get("/", [HomeController::class, 'handle']);
    $r->post("/graphql", [GraphQLController::class, 'handle']);
};