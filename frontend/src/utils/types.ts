export type Category = {
  slug: string;
  name: string;
};

export type Currency = {
  label: string;
  symbol: string;
};

export type Price = {
  amount: number;
  currency: Currency;
};

export type Image = {
  url: string;
};

export type ProductForCard = {
  sku: string;
  name: string;
  inStock: boolean;
  price: Price;
  mainImage: Image;
};
