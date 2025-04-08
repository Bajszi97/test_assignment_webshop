<?php

namespace App\Repositories;

use App\Models\Category;
use App\Models\Currency;
use App\Models\Image;
use App\Models\Price;
use App\Models\Product;
use Doctrine\ORM\EntityRepository;

class ProductRepository extends EntityRepository 
{
    public function createAndSave(array $attributes): Product
    {
        $new = Product::create($attributes);
        $em = $this->getEntityManager();
        
        $category = $em->getRepository(Category::class)->findOneBySlug($attributes['category']);
        $new->setCategory($category);
        $category->addProduct($new);

        if(isset($attributes['price'])){
            $new = $this->createPriceForProduct($attributes['price'], $new);
        }
        
        if(isset($attributes['images'])){
            foreach ($attributes['images'] as $imageAttributes) {
                $new = $this->createImageForProduct($imageAttributes, $new);
            }
        }

        $em->persist($new);
        $em->flush();

        return $new;
    }

    public function createPriceForProduct(array $attributes, Product $product): Product
    {
        $price = Price::create(['amount' => $attributes['amount']]);

        $em = $this->getEntityManager();
        $currency = $em->getRepository(Currency::class)->findOneBy(['label' => $attributes['currency']]);
        $price->setCurrency($currency);

        $price->setProduct($product);
        $product->setPrice($price);
        $em->persist($price);

        return $product;
    }

    public function createImageForProduct(array $attributes, Product $product): Product
    {
        $image = Image::create(['url' => $attributes['url']]);

        $em = $this->getEntityManager();
        $image->setProduct($product);
        $product->addImage($image);
        $em->persist($image);

        return $product;
    }
}
