<?php

namespace App\Models;

use App\Models\Traits\MassAssignedCreate;
use App\Models\Traits\ToRapidDTO;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\JoinTable;
use Doctrine\ORM\Mapping\ManyToMany;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity()]
#[Table(name: 'order_items')]
class OrderItem
{   
    use MassAssignedCreate;
    use ToRapidDTO;

    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;

    #[Column()]
    private int $quantity;

    #[ManyToOne(targetEntity: Order::class, inversedBy: 'items')]
    private Order $order;

    #[ManyToOne(targetEntity: Product::class, inversedBy: 'orderItems')]
    private Product $product;

    #[JoinTable(name: 'order_item_attribute_values')]
    #[ManyToMany(targetEntity: AttributeValue::class, inversedBy: 'orderItems')]
    private Collection $attributes;

    public function __construct()
    {
        $this->attributes = new ArrayCollection();
    }

    private function getVisible(): array
    {
        return [
            'quantity',
            'order',
            'product',
            'attributes',
        ];
    }

    private function getFillable(): array
    {
        return [
            'quantity',
        ];
    }

    public function setOrder(Order $order): static
    {
        $this->order = $order;
        return $this;
    }

    public function setProduct(Product $product): static
    {
        $this->product = $product;
        return $this;
    }

    public function addAttribute(AttributeValue $attribute): self
    {
        $this->attributes->add($attribute);
        return $this;
    }
}

