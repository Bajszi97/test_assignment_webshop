<?php

namespace App\Repositories;

use App\Models\AttributeSet;
use App\Repositories\Trait\FindOneBySlug;
use Doctrine\ORM\EntityRepository;

class AttributeSetRepository extends EntityRepository 
{   
    use FindOneBySlug;

    public function findOrCreate(array $attributes): AttributeSet
    {
        return $this->findOneBySlug($attributes['slug']) ?: $this->createAndSave($attributes);
    }
    
    public function createAndSave(array $attributes): AttributeSet
    {
        $new = AttributeSet::create($attributes);
        $em = $this->getEntityManager();
        $em->persist($new);
        // $em->flush();
        return $new;
    }
}
