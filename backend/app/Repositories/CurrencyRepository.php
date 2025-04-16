<?php

namespace App\Repositories;

use App\Models\Currency;
use Doctrine\ORM\EntityRepository;

class CurrencyRepository extends EntityRepository
{
    public function findOrCreate(array $attributes): Currency
    {
        return $this->findOneBy(['label' => $attributes['label']]) ?: $this->createAndSave($attributes);
    }

    public function createAndSave(array $attributes): Currency
    {
        $new = Currency::create($attributes);
        $em = $this->getEntityManager();
        $em->persist($new);

        return $new;
    }
}
