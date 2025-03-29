<?php

namespace App\Core;

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

        static::$config = [
            'db' => [
                'host' => $_ENV['DB_HOST'],
                'port' => $_ENV['DB_PORT'],
                'database' => $_ENV['DB_DATABASE'],
                'user' => $_ENV['DB_USER'],
                'password' => $_ENV['DB_PASSWORD'],
            ],
            'errors' => [
                'debug' => $_ENV['APP_DEBUG'],
                'log_file' => $_ENV['LOG_FILE'],
            ]
        ];

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