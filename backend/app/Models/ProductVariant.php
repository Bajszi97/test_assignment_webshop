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
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\Table;

#[Entity()]
#[Table(name: 'product_variants')]
class ProductVariant
{
    use MassAssignedCreate;
    use ToRapidDTO;

    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;

    #[ManyToOne(targetEntity: Product::class, inversedBy: 'variants')]
    private Product $product;

    #[OneToMany(targetEntity: AttributeValue::class, mappedBy: 'productVariant')]
    private Collection $attributes;

    #[OneToMany(targetEntity: OrderItem::class, mappedBy: 'productVariant')]
    private Collection $orderItems;

    public function __construct()
    {
        $this->attributes = new ArrayCollection();
        $this->orderItems = new ArrayCollection();
    }

    private function getVisible(): array
    {
        return [
            'id',
            'attributes',
        ];
    }

    private function getFillable(): array
    {
        return [];
    }

    public function setProduct(Product $product): self
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

