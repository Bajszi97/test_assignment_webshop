<?php

namespace App\Models;

use App\Models\Traits\ToRapidDTO;
use App\Models\Traits\MassAssignedCreate;
use App\Repositories\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\Table;

#[Entity(repositoryClass: CategoryRepository::class)]
#[Table(name: 'categories')]
class Category
{
    use ToRapidDTO;
    use MassAssignedCreate;

    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;

    #[Column()]
    private string $slug;

    #[Column()]
    private string $name;

    #[OneToMany(targetEntity: Product::class, mappedBy: 'category')]
    private Collection $products;

    public function __construct()
    {
        $this->products = new ArrayCollection();
    }


    private function getVisible(): array
    {
        return [
            'slug',
            'name',
        ];
    }

    private function getFillable(): array
    {
        return [
            'slug',
            'name',
        ];
    }

    public function toName(): string
    {
        return $this->name;
    }

    public function addProduct(Product $product): self
    {
        $this->products->add($product);
        return $this;
    }
}
