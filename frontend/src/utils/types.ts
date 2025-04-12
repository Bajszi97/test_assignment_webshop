import { Dispatch, PropsWithChildren, SetStateAction } from "react";

export type AttributeSetType = 'text' | 'swatch';

export interface Category {
  slug: string;
  name: string;
};

export interface Currency {
  label: string;
  symbol: string;
};

export interface Price {
  amount: number;
  currency: Currency;
};

export interface Product {
  slug: string;
  name: string;
  description: string;
  brand: string;
  inStock: boolean;
  category: Category;
  prices: Price[];
  attributes: AttributeSet[];
};

export interface AttributeSet {
  slug: string,
  name: string,
  type: AttributeSetType,
  items: AttributeValue[]
}

export interface AttributeValue {
  slug: string,
  value: string,
  displayValue: string,
}

export interface ProductForCard {
  slug: string;
  name: string;
  inStock: boolean;
  category: Category;
  prices: Price[];
  mainImage: string;
};

export interface GalleryProps extends PropsWithChildren {
  urls: string[],
  selectedImage: string,
  setSelectedImage: Dispatch<SetStateAction<string>>,
}

export interface AttributeSetProps extends PropsWithChildren {
  attributeSet: AttributeSet,
  onChange: (attribute: string, valueSlug: string) => void,
}

export interface AttributeValueProps extends PropsWithChildren {
  attributeValue: AttributeValue
  onClick: (value: string) => void
  isSelected: boolean
}

