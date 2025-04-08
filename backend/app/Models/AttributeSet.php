<?php

namespace App\Models;

use App\Models\Traits\ToRapidDTO;
use App\Models\Traits\MassAssignedCreate;
use App\Repositories\AttributeSetRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\Table;

#[Entity(repositoryClass: AttributeSetRepository::class)]
#[Table(name: 'attribute_sets')]
class AttributeSet
{   

    use MassAssignedCreate;
    use ToRapidDTO;

    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;
    
    #[Column()]
    private string $name;
    
    #[Column()]
    private string $type;

    #[OneToMany(targetEntity: AttributeValue::class, mappedBy: 'attributeSet')]
    private Collection $values;

    public function __construct()
    {
        $this->values = new ArrayCollection();
    }

    private function getVisible(): array
    {
        return [
            'id',
            'name',
            'type',
        ];
    }

    private function getFillable(): array
    {
        return [
            'name',
            'type',
        ];
    }

    public function toName() : string {
        return $this->name;
    }
}

