<?php

namespace App\Models;

use App\Models\Traits\ToRapidDTO;
use App\Models\Traits\MassAssignedCreate;
use App\Repositories\CurrencyRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\Table;

#[Entity(repositoryClass: CurrencyRepository::class)]
#[Table(name: 'currencies')]
class Currency
{

    use MassAssignedCreate;
    use ToRapidDTO;

    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;
    
    #[Column()]
    private string $label;

    #[Column()]
    private string $symbol;

    private function getVisible(): array
    {
        return [
            'id',
            'label',
            'symbol',
        ];
    }

    private function getFillable(): array
    {
        return [
            'label',
            'symbol',
        ];
    }

    #[OneToMany(targetEntity: Price::class, mappedBy: 'currency')]
    private Collection $prices;
}

