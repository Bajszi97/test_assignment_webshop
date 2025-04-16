<?php

namespace App\Repositories\Trait;

trait FindOneBySlug
{
    public function findOnyBySlug(string $slug): ?object
    {
        return $this->findOneBy(['slug' => $slug]);
    }
}
