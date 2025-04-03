<?php

namespace App\Core\Exceptions;

class RouteNotFound extends HTTPException {

    protected $statusCode = 404;
    protected $message = "The route you are looking for not exists";
}