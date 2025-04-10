<?php

namespace App\Repositories;

use App\Models\AttributeSet;
use App\Models\AttributeValue;
use App\Models\Category;
use App\Models\Currency;
use App\Models\Image;
use App\Models\Price;
use App\Models\Product;
use Doctrine\ORM\EntityRepository;

class ProductRepository extends EntityRepository
{

    public function findByFilters(array $filters): array
    {
        if (isset($filters['category'])) {
            if ($filters['category'] === 'all') {
                unset($filters['category']);
            } else {
                $filters['category'] = $this->getEntityManager()
                    ->getRepository(Category::class)
                    ->findOneBySlug($filters['category']);
            }
        }

        return $this->findBy($filters);
    }

    public function createAndSave(array $attributes): Product
    {
        $new = Product::create($attributes);
        $em = $this->getEntityManager();

        $category = $em->getRepository(Category::class)->findOneBySlug($attributes['category']);
        $new->setCategory($category);
        $category->addProduct($new);

        if (isset($attributes['prices'])) {
            foreach ($attributes['prices'] as $priceAttributes) {
                $new = $this->createPriceForProduct($priceAttributes, $new);
            }
        }

        if (isset($attributes['gallery'])) {
            foreach ($attributes['gallery'] as $urls) {
                $new = $this->createImageForProduct($urls, $new);
            }
        }

        if (isset($attributes['attributes'])) {
            foreach ($attributes['attributes'] as $attributeSetAttributes) {
                $new = $this->addAttributeSetToProduct($attributeSetAttributes, $new);
            }
        }

        $em->persist($new);
        $em->flush();

        return $new;
    }

    public function createPriceForProduct(array $attributes, Product $product): Product
    {
        $price = Price::create(['amount' => (int) (100 * $attributes['amount'])]);

        $em = $this->getEntityManager();
        $currency = $em->getRepository(Currency::class)->findOrCreate($attributes['currency']);
        $price->setCurrency($currency);

        $price->setProduct($product);
        $product->addPrice($price);
        $em->persist($price);

        return $product;
    }

    public function createImageForProduct(string $url, Product $product): Product
    {
        $image = Image::create(['url' => $url]);

        $em = $this->getEntityManager();
        $image->setProduct($product);
        $product->addImage($image);
        $em->persist($image);

        return $product;
    }

    public function addAttributeSetToProduct(array $attributes, Product $product): Product
    {
        $em = $this->getEntityManager();
        $attributeSet = $em->getRepository(AttributeSet::class)->findOrCreate($attributes);

        if (isset($attributes['items'])) {
            foreach ($attributes['items'] as $attrAttributes) {
                $attributeValue = $em->getRepository(AttributeValue::class)->findOrCreate($attrAttributes, $attributeSet);
                $attributeValue->addProduct($product);
                $product->addAttribute($attributeValue);
            }
        }

        return $product;
    }

}
