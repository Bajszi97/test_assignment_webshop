<?php

namespace App\Core;

use Dotenv\Dotenv;

class Config
{
    private static array $config = [];
    private static bool $isLoaded = false;

    private function __construct()
    {
    }

    public static function load(): void
    {
        if (static::$isLoaded) {
            return;
        }

        $dotenv = Dotenv::createImmutable(__DIR__.'/../../');
        $dotenv->load();

        static::$config = require_once __DIR__."/../config.php";

        static::$isLoaded = True;
    }

    public static function getAll(): array
    {
        return static::$config;
    }

    public static function get(string $config, mixed $default = null): mixed {  
        $keys = explode('.', $config);
        $value = static::$config;
    
        foreach ($keys as $key) {
            if (!is_array($value) || !array_key_exists($key, $value)) {
                return $default;
            }
            $value = $value[$key];
        }
    
        return $value;
    }
}