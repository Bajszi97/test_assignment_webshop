<?php

namespace App\Models\Traits;

trait ArrayableEntity
{
    public function toArray(): array
    {
        $result = [];
        foreach ($this->getVisible() as $field) {
            $result[$field] = $this->$field;
        }
        return $result;
    }

    abstract protected function getVisible(): array;
}
