<?php

namespace App\Models;

use App\Repositories\CategoryRepository;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;

#[Entity(repositoryClass: CategoryRepository::class)]
#[Table(name: 'categories')]
class Category
{
    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;
    
    #[Column()]
    private string $name;

    public function toName() : string {
        return $this->name;
    }

    public static function createFromName(string $name): static
    {   
        $new = new Category;
        $new->name = $name;
        return $new;
    }

    public function __serialize(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
        ];
    }
}

