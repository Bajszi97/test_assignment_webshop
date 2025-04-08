<?php

namespace App\Repositories;

use App\Models\Category;
use Doctrine\ORM\EntityRepository;

class CategoryRepository extends EntityRepository 
{
    public function createAndSave(array $attributes): Category
    {
        $new = Category::create($attributes);
        $em = $this->getEntityManager();
        $em->persist($new);
        $em->flush();
        return $new;
    }
}
