import { Dispatch, SetStateAction } from "react";

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

export interface ProductForCard {
  slug: string;
  name: string;
  inStock: boolean;
  category: Category;
  prices: Price[];
  mainImage: string;
};

export interface GalleryProps {
  urls: string[],
  selectedImage: string,
  setSelectedImage: Dispatch<SetStateAction<string>>,
}
