<?php

use App\Controllers\GraphQLController;

return function (FastRoute\RouteCollector $r) {
    $r->post("/graphql", [GraphQLController::class, 'handle']);
};