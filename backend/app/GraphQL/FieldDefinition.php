<?php

namespace App\GraphQL;

interface FieldDefinition {
    public function getDefinition(): array;
}