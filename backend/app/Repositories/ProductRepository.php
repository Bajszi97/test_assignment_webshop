<?php

namespace App\Repositories;

use App\Core\Application;
use App\Models\AttributeSet;
use App\Models\AttributeValue;
use App\Models\Category;
use App\Models\Currency;
use App\Models\Image;
use App\Models\Price;
use App\Models\Product;
use App\Models\ProductVariant;
use Doctrine\ORM\EntityRepository;
use Traversable;

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

        if (isset($attributes['price'])) {
            $new = $this->createPriceForProduct($attributes['price'], $new);
        }

        if (isset($attributes['images'])) {
            foreach ($attributes['images'] as $imageAttributes) {
                $new = $this->createImageForProduct($imageAttributes, $new);
            }
        }

        // TODO: default variant if there is no specified product variant
        // remove the default if a product variant is added later on?
        if (isset($attributes['variants'])) {
            foreach ($attributes['variants'] as $variantAttributes) {
                $new = $this->createVariantForProduct($variantAttributes, $new);
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

    public function createVariantForProduct(array $attributes, Product $product): Product
    {
        $variant = ProductVariant::create([]);

        $em = $this->getEntityManager();

        if (isset($attributes['attributes'])) {
            foreach ($attributes['attributes'] as $attrAttributes) {
                $variant = $this->createAttributeValueForVariant($attrAttributes, $variant);
            }
        }

        $variant->setProduct($product);
        $product->addVariant($variant);


        $em->persist($variant);

        return $product;
    }


    public function createAttributeValueForVariant(array $attributes, ProductVariant $variant): ProductVariant
    {
        $attributeValue = AttributeValue::create($attributes);

        $em = $this->getEntityManager();
        $attributeSet = $em->getRepository(AttributeSet::class)->findOneBySlug($attributes['attributeSet']);
        $attributeValue->setAttributeSet($attributeSet);
        $attributeSet->addValue($attributeValue);

        $attributeValue->setProductVariant($variant);
        $variant->addAttribute($attributeValue);
        $em->persist($attributeValue);
        return $variant;
    }
}
