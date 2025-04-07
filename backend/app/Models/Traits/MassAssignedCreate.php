<?php

namespace App\Models\Traits;

use App\Core\Application;

trait MassAssignedCreate {

    /**
     * Create a new entity instance with the given attributes.
     * Only attributes set in the getFillable getter method can be assigned through this static method. 
     * @param array $attributes
     * @return object
     */
    public static function create(array $attributes): static
    {
        $new = new static;
        $assignableAttributes = array_intersect_key( $attributes, array_flip($new->getFillable()));
        foreach ($assignableAttributes as $attribute => $value) {
            $new->$attribute = $value;
        }
        return $new;
    }

    /**
     * Return the array containing the entity's properties which are mass assignable int the create method.
     * @return array
     */
    abstract protected function getFillable(): array;
}