<?php

namespace App\Models;

use App\Models\Traits\ArrayableEntity;
use App\Repositories\CategoryRepository;
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
    use ArrayableEntity;

    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;

    #[Column()]
    private string $name;

    #[OneToMany(targetEntity: Product::class, mappedBy: 'category')]
    private Collection $products;

    private function getVisible(): array
    {
        return [
            'id',
            'name',
        ];
    }

    public function toName(): string
    {
        return $this->name;
    }

    public static function createFromName(string $name): static
    {
        $new = new Category;
        $new->name = $name;
        return $new;
    }
}

