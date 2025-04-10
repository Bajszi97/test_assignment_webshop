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

export type ProductForCard = {
  slug: string;
  name: string;
  inStock: boolean;
  prices: Price[];
  mainImage: string;
};
