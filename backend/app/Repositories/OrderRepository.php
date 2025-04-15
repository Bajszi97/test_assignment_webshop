<?php

namespace App\Repositories;

use App\Models\AttributeSet;
use App\Models\AttributeValue;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Doctrine\ORM\EntityRepository;

class OrderRepository extends EntityRepository
{
    public function createAndSave(array $attributes): Order
    {
        $new = new Order; // Order doesn't have any attribute that should be mass assigned. 
        $em = $this->getEntityManager();

        if (isset($attributes['items'])) {
            foreach ($attributes['items'] as $itemAttributes) {
                $new = $this->createOrderItemForOrder($itemAttributes, $new);
            }
        }

        $em->persist($new);
        $em->flush();

        return $new;
    }

    private function createOrderItemForOrder(array $attributes, Order $order): Order
    {
        $em = $this->getEntityManager();
        $orderItem = OrderItem::create($attributes);

        $product = $em->getRepository(Product::class)->findOneBySlug($attributes['productSlug']);
        $orderItem->setProduct($product);
        $product->addOrderItem($orderItem);

        if (isset($attributes['attributes'])) {
            foreach ($attributes['attributes'] as $attrAttributes) {
                // TODO should search in available product attribute values
                $attributeValue = $em->getRepository(AttributeValue::class)->findOneBy(
                    [
                        'slug' => $attrAttributes['valueSlug'],
                        'attributeSet' => $em->getRepository(AttributeSet::class)->findOneBySlug($attrAttributes['setSlug'])
                    ]
                );
                $attributeValue->addOrderItem($orderItem);
                $orderItem->addAttribute($attributeValue);
            }
        }

        $order->addItem($orderItem);
        $orderItem->setOrder($order);

        $em->persist($orderItem);

        return $order;
    }
}
