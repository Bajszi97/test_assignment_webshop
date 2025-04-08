<?php

namespace App\Repositories;

use App\Models\Category;
use App\Models\Product;
use Doctrine\ORM\EntityRepository;

class ProductRepository extends EntityRepository 
{
    public function createAndSave(array $attributes): Product
    {
        $new = Product::create($attributes);
        $em = $this->getEntityManager();
        
        $category = $em->find(Category::class, $attributes['categoryId']);
        $new->setCategory($category);
        $category->addProduct($new);

        $em->persist($new);
        $em->flush();
        return $new;
    }
}
