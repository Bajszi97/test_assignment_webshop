export type AttributeSetType = "text" | "swatch";

export interface Category {
  slug: string;
  name: string;
}

export interface Currency {
  label: string;
  symbol: string;
}

export interface Price {
  amount: number;
  currency: Currency;
}

export interface Product {
  slug: string;
  name: string;
  description: string;
  brand: string;
  inStock: boolean;
  category: Category;
  gallery: string[];
  prices: Price[];
  attributes: AttributeSet[];
}

export interface AttributeSet {
  slug: string;
  name: string;
  type: AttributeSetType;
  items: AttributeValue[];
}

export interface AttributeValue {
  slug: string;
  value: string;
  displayValue: string;
}

export interface ProductForCard {
  slug: string;
  name: string;
  inStock: boolean;
  category: Category;
  prices: Price[];
  mainImage: string;
}
