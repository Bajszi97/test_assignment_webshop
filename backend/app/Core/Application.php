<?php

namespace App\Core;

class Application {

    private function __construct()
    {
        $this->loadConfigs();
        $this->createDIContainer();
        $this->registerErrorHandler();
    }

    public static function create(): static {
        return new static;
    }

    // public static function dd($content): void {
    //     // Response::create(body: print_r($content, true))->send();
    //     die();
    // }
}