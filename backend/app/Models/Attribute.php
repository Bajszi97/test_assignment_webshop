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
#[Table(name: 'attributes')]
class Attribute
{
    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;
    
    #[Column()]
    private string $name;
    
    #[Column()]
    private string $type;

    #[OneToMany(targetEntity: AttributeValue::class, mappedBy: 'attribute')]
    private Collection $values;

    public function toName() : string {
        return $this->name;
    }
}

