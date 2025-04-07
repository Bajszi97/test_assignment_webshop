<?php

namespace App\Models;

use DateTime;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\Table;

#[Entity()]
#[Table(name: 'orders')]
class Order
{
    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;
    
    #[Column(name:'placed_at')]
    private DateTime $placedAt;

    #[OneToMany(targetEntity: OrderItem::class, mappedBy: 'order')]
    private Collection $items;
}

