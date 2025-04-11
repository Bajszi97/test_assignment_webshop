<?php

namespace App\Models;

use App\Models\Traits\MassAssignedCreate;
use App\Models\Traits\ToRapidDTO;
use App\Repositories\AttributeValueRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;
use Doctrine\ORM\Mapping\ManyToMany;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity(repositoryClass: AttributeValueRepository::class)]
#[Table(name: 'attribute_values')]
class AttributeValue
{   

    use MassAssignedCreate;
    use ToRapidDTO;

    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;
    
    #[Column()]
    private string $slug;

    #[Column()]
    private string $value;

    #[Column(name: 'display_value')]
    private string $displayValue;

    #[ManyToOne(targetEntity: AttributeSet::class, inversedBy: 'items')]
    #[JoinColumn(name: 'attribute_set_id')]
    private AttributeSet $attributeSet;
    
    #[ManyToMany(targetEntity: Product::class, mappedBy: 'attributes')]
    private Collection $products;

    public function __construct()
    {
        $this->products = new ArrayCollection();
    }

    private function getVisible(): array
    {
        return [
            'slug',
            'value',
            'displayValue',
            'attributeSet',
        ];
    }

    private function getFillable(): array
    {
        return [
            'slug',
            'value',
            'displayValue',
        ];
    }

    public function addProduct(Product $product): self
    {
        $this->products->add($product);
        return $this;
    }

    public function setAttributeSet(AttributeSet $attributeSet): self
    {
        $this->attributeSet = $attributeSet;
        return $this;
    }
}

