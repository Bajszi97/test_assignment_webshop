<?php

namespace App\Repositories\Trait;

use Doctrine\ORM\Mapping\Entity;

trait FindOneBySlug
{
    public function findOnyBySlug(string $slug): ?object
    {
        return $this->findOneBy(['slug' => $slug]);
    }
}
