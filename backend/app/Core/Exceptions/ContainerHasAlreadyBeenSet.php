<?php

namespace App\Core\Exceptions;

class ContainerHasAlreadyBeenSet extends HTTPException
{
    protected $statusCode = 500;
    protected $message = "The Application container can only be set once, and it has already been set.";
}
