<?php

use App\Controllers\CategoryController;
use App\Controllers\HomeController;

return function (FastRoute\RouteCollector $r) {
    $r->get("/", [HomeController::class, 'index']);
    $r->get("/category", [CategoryController::class, 'index']);
    $r->post("/category", [CategoryController::class, 'store']);
};