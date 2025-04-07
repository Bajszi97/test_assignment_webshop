<?php

namespace App\Core\Exceptions;

class BadControllerMethodCall extends HTTPException {

    protected $statusCode = 500;
    protected $message = "The router service could not call the controllers' method";
}