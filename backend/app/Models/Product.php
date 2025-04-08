<?php

namespace App\Models;

use App\Models\Traits\ToRapidDTO;
use App\Models\Traits\MassAssignedCreate;
use App\Repositories\ProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\OneToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity(repositoryClass: ProductRepository::class)]
#[Table(name: 'products')]
class Product
{

    use MassAssignedCreate;
    use ToRapidDTO;

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
    private ?Price $price;

    #[OneToMany(targetEntity: Image::class, mappedBy: 'product')]
    private Collection $images;

    public function __construct()
    {
        $this->images = new ArrayCollection();
        $this->variants = new ArrayCollection();
    }

    private function getVisible(): array
    {
        return [
            'id',
            'sku',
            'name',
            'inStock',
            'description',
            'brand',
            'category',
            'price',
            'images',
        ];
    }

    private function getFillable(): array
    {
        return [
            'name',
            'sku',
            'name',
            'inStock',
            'description',
            'brand',
        ];
    }

    public function toName(): string
    {
        return $this->name;
    }

    public function setCategory(Category $category): self
    {
        $this->category = $category;
        return $this;
    }

    public function setPrice(Price $price): self
    {
        $this->price = $price;
        return $this;
    }

    public function addImage(Image $image): self
    {
        $this->images->add($image);
        return $this;
    }
}

