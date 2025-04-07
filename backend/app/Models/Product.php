<?php

namespace App\Models;

use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\OneToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity()]
#[Table(name: 'products')]
class Product
{
    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;

    #[Column()]
    private string $sku;

    #[Column()]
    private string $name;

    #[Column(name:'in_stock')]
    private bool $inStock;

    #[Column()]
    private string $description;

    #[Column()]
    private string $brand;

    #[ManyToOne(targetEntity: Category::class, inversedBy: 'products')]
    private Category $category;

    #[OneToMany(targetEntity: ProductVariant::class, mappedBy: 'product')]
    private Collection $variants;

    #[OneToOne(mappedBy: 'product')]
    private Price $price;

    #[OneToMany(targetEntity: Image::class, mappedBy: 'product')]
    private Collection $images;

    public function toName(): string
    {
        return $this->name;
    }
}

