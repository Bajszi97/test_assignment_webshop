<?php

namespace App\Core;

use App\Core\Exceptions\HTTPException;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface;
use Throwable;

class ErrorHandler
{
    private bool $debug;
    private string $logFile;

    public function __construct(
        private ResponseFactoryInterface $responseFactory
    ) {
        $this->configure();
    }

    private function configure(): void
    {
        $config = Config::get('error_handling');
        $this->debug = $config['debug'] ?? false;
        $this->createLogFile($config['log_file']);
    }

    public function handle(Throwable $exception): ResponseInterface
    {

        $message = "Uncaught Exception: " . get_class($exception) . " - " . $exception->getMessage() .
            " in " . $exception->getFile() . " on line " . $exception->getLine();

        $this->logError($message);

        if ($exception instanceof HTTPException) {
            return $exception->toResponse($this->responseFactory);
        }

        $response = $this->responseFactory->createResponse(500);

        if ($this->debug) {
            $response->getBody()->write($message);
        }
        return $response;
    }

    private function logError(string $message): void
    {
        // TODO: Logger Interface
        error_log("[" . date('Y-m-d H:i:s') . "] " . $message . "\n", 3, $this->logFile);
    }

    private function createLogFile(string $logFile = 'logs/errors.log'): void
    {
        $this->logFile = $logFile;
        $logDir = dirname($this->logFile);

        if (!is_dir($logDir)) {
            mkdir($logDir, 0770, true);
        }
        
        if (!file_exists($this->logFile)) {
            touch($this->logFile);
        }
    }
}
