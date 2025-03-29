<?php

use App\Core\Route;
use App\Controllers\HomeController;

return [
    Route::get('/', [HomeController::class, 'index']),
];
