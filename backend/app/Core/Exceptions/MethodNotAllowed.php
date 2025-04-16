<?php

namespace App\Core\Exceptions;

class MethodNotAllowed extends HTTPException
{
    protected $statusCode = 405;
    protected $message = "The request's method is not allowed on this route.";
}
