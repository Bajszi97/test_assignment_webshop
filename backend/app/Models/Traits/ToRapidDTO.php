<?php

namespace App\Models\Traits;

use stdClass;

trait ToRapidDTO
{
    public function toDTO(): object
    {
        $result = new stdClass();
        foreach ($this->getVisible() as $field) {
            $result->$field = $this->getFieldValue($field);
        }
        return $result;
    }

    private function getFieldValue(string $field): mixed
    {
        $getterMethod = "get" . ucfirst($field);
        if (method_exists($this, $getterMethod)) {
            return $this->$getterMethod();
        }

        return $this->$field;
    }

    abstract protected function getVisible(): array;
}
