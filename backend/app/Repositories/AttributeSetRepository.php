<?php

namespace App\Repositories;

use App\Models\AttributeSet;
use Doctrine\ORM\EntityRepository;

class AttributeSetRepository extends EntityRepository 
{
    public function createAndSave(array $attributes): AttributeSet
    {
        $new = AttributeSet::create($attributes);
        $em = $this->getEntityManager();
        $em->persist($new);
        $em->flush();
        return $new;
    }
}
