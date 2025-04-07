<?php

namespace App\Models;

use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\Table;

#[Entity()]
#[Table(name: 'currencies')]
class Currency
{
    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;
    
    #[Column()]
    private string $label;

    #[Column()]
    private string $symbol;

    #[OneToMany(targetEntity: Price::class, mappedBy: 'currency')]
    private Collection $prices;
}

