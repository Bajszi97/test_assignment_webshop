<?php

namespace App\Models;

use App\Models\Traits\MassAssignedCreate;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity()]
#[Table(name: 'images')]
class Image
{
    use MassAssignedCreate;

    #[Id]
    #[Column()]
    #[GeneratedValue()]
    private int $id;

    #[Column()]
    private string $url;

    #[ManyToOne(targetEntity: Product::class, inversedBy: 'images')]
    private Product $product;

    private function getFillable(): array
    {
        return [
            'url',
        ];
    }

    public function toUrl(): string
    {
        return $this->url;
    }

    public function setProduct(Product $product): self
    {
        $this->product = $product;
        return $this;
    }
}
