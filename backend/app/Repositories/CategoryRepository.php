<?php

namespace App\Repositories;

use App\Models\Category;
use Doctrine\ORM\EntityRepository;

class CategoryRepository extends EntityRepository 
{
    public function createFromName(string $name): Category
    {
        $category = Category::createFromName($name);
        $em = $this->getEntityManager();
        $em->persist($category);
        $em->flush();
        return $category;
    }
}
