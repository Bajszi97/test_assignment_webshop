<?php

namespace App\Models;

use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\Table;

#[Entity()]
#[Table(name: 'product_variants')]
class ProductVariant
{
    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;
    
    #[ManyToOne(targetEntity: Product::class, inversedBy: 'variants')]
    private Product $product;

    #[OneToMany(targetEntity: AttributeValue::class, mappedBy: 'product')]
    private Collection $attributes;

    #[OneToMany(targetEntity: OrderItem::class, mappedBy: 'product')]
    private Collection $orderItems;

}

