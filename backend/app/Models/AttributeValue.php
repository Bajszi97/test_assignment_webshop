<?php

namespace App\Models;

use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity()]
#[Table(name: 'attribute_values')]
class AttributeValue
{
    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;
    
    #[Column()]
    private string $value;

    #[Column(name: 'display_value')]
    private string $displayValue;

    #[ManyToOne(targetEntity: AttributeSet::class, inversedBy: 'values')]
    #[JoinColumn(name: 'attribute_set_id')]
    private AttributeSet $attributeSet;
    
    #[ManyToOne(targetEntity: ProductVariant::class, inversedBy: 'attributes')]
    #[JoinColumn(name: 'product_variant_id')]
    private ProductVariant $productVariant;
}

