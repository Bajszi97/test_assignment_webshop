<?php

namespace App\Models;

use App\Models\Traits\MassAssignedCreate;
use App\Models\Traits\ToRapidDTO;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\OneToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity()]
#[Table(name: 'prices')]
class Price
{
    use MassAssignedCreate;
    use ToRapidDTO;

    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;

    #[Column()]
    private int $amount;

    #[ManyToOne(targetEntity: Product::class, inversedBy: 'prices')]
    #[JoinColumn(nullable: true, onDelete: 'CASCADE')]
    private ?Product $product;

    #[OneToOne(inversedBy: 'price', targetEntity: OrderItem::class)]
    #[JoinColumn(nullable: true, onDelete: 'CASCADE')]
    private ?OrderItem $orderItem = null;

    #[ManyToOne(targetEntity: Currency::class, inversedBy: 'prices')]
    private Currency $currency;

    private function getVisible(): array
    {
        return [
            'id',
            'currency',
            'amount',
        ];
    }

    private function getFillable(): array
    {
        return [
            'amount',
        ];
    }

    public function toAmount(): float
    {
        return $this->amount;
    }

    public function toCurrency(): Currency
    {
        return $this->currency;
    }

    public function setProduct(Product $product): self
    {
        $this->product = $product;
        return $this;
    }

    public function setOrderItem(OrderItem $orderItem): self
    {
        $this->orderItem = $orderItem;
        return $this;
    }

    public function setCurrency(Currency $currency): self
    {
        $this->currency = $currency;
        return $this;
    }
}
