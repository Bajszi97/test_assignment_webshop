<?php

use App\Controllers\HomeController;

return function (FastRoute\RouteCollector $r) {
    $r->get("/", [HomeController::class, 'index']);
};