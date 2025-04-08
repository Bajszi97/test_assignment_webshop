<?php

namespace App\Repositories;

use App\Models\Currency;
use Doctrine\ORM\EntityRepository;

class CurrencyRepository extends EntityRepository 
{
    public function createAndSave(array $attributes): Currency
    {
        $category = Currency::create($attributes);
        $em = $this->getEntityManager();
        $em->persist($category);
        $em->flush();
        return $category;
    }
}
