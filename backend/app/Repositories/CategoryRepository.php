<?php

namespace App\Repositories;

use App\Models\Category;
use App\Repositories\Trait\FindOneBySlug;
use Doctrine\ORM\EntityRepository;

class CategoryRepository extends EntityRepository 
{   
    use FindOneBySlug;

    public function createAndSave(array $attributes): Category
    {
        $new = Category::create($attributes);
        $em = $this->getEntityManager();
        $em->persist($new);
        $em->flush();
        return $new;
    }
}
