<?php

namespace App\Repositories;

use App\Models\AttributeSet;
use App\Models\AttributeValue;
use App\Repositories\Trait\FindOneBySlug;
use Doctrine\ORM\EntityRepository;

class AttributeValueRepository extends EntityRepository 
{   
    public function findOrCreate(array $attributes, AttributeSet $set): AttributeValue
    {
        return $this->findOneBy(['slug' => $attributes['slug'], 'attributeSet' => $set]) 
            ?: $this->createAndSave($attributes,$set);
    }
    
    public function createAndSave(array $attributes, AttributeSet $set): AttributeValue
    {
        $new = AttributeValue::create($attributes);
        $em = $this->getEntityManager();
        $set->addValue($new);
        $new->setAttributeSet($set);
        $em->persist($new);
        // $em->flush();
        return $new;
    }
}
