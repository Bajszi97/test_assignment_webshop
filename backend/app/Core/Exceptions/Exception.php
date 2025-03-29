<?php

namespace App\Core\Exceptions;

use Exception as PHPException;
use Symfony\Component\HttpFoundation\Response;

abstract class Exception extends PHPException {

    public function handle(): void{ 
        // TODO implement debug mod
        $this->toResponse()->send();
    }

    abstract public function toResponse(): Response;
}