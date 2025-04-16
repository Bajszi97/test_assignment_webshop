<?php

namespace App\Repositories;

use App\Core\Application;
use App\Models\AttributeSet;
use App\Models\Product;
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

    public function getAttributeSetsOfProduct(int $productID): array
    {
        $query = $this->createQueryBuilder('a')
            ->leftJoin('a.items', 'av')
            ->leftJoin('av.products', 'p')
            ->where('p.id = :id')
            ->groupBy('av.id')
            ->select('a', 'av')
            ->setParameter('id', $productID)
            ->getQuery();

            return $query->getArrayResult();
    }
}
