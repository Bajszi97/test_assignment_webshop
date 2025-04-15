<?php

namespace App\Models;

use App\Models\Traits\ToRapidDTO;
use App\Repositories\OrderRepository;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\Table;

#[Entity(repositoryClass:  OrderRepository::class)]
#[Table(name: 'orders')]
class Order
{   
    use ToRapidDTO;

    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;

    #[Column(name: 'placed_at', options: ['default' => 'CURRENT_TIMESTAMP'])]
    private DateTime $placedAt;

    #[OneToMany(targetEntity: OrderItem::class, mappedBy: 'order')]
    private Collection $items;

    public function __construct() {
        $this->items = new ArrayCollection();
        $this->placedAt = new DateTime();
    }

    private function getVisible():  array
    {
        return [
            'placedAt',
            'items',
        ];
    }

    public function addItem(OrderItem $orderItem): self
    {   
        $this->items->add($orderItem);
        return $this;
    }
}

