<?php

namespace App\Repositories;

use App\Models\AttributeSet;
use App\Models\Category;
use Doctrine\ORM\EntityRepository;

class AttributeSetRepository extends EntityRepository 
{
    public function createAndSave(array $attributes): AttributeSet
    {
        $category = AttributeSet::create($attributes);
        $em = $this->getEntityManager();
        $em->persist($category);
        $em->flush();
        return $category;
    }
}
