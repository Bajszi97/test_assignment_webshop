<?php

namespace App\Models;

use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\OneToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity()]
#[Table(name: 'prices')]
class Price
{
    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;

    #[Column()]
    private int $amount;

    #[OneToOne()]
    private Product $product;

    #[ManyToOne(targetEntity: Currency::class, inversedBy: 'prices')]
    private Currency $currency;
}

