import HTMLReactParser from "html-react-parser/lib/index";
import {
  AttributeSet as AttributeSetType,
  Product,
} from "@/types/DomainModels";
import AttributeTitle from "./attributes/AttributeTitle";
import AttributeSet from "./attributes/AttributeSetInput";
import { useState } from "react";
import ProductName from "./ProductName";
import PriceTag from "./PriceTag";
import PrimaryButton from "./PrimaryButton";
import { useCartContext } from "@/hooks/useCartContext";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [selectedAttributes, setSelectedAttributes] = useState<
    Record<string, string>
  >({});
  const { addItem, setIsCartOpen } = useCartContext();

  const handleAttributeChange = (attribute: string, valueSlug: string) => {
    setSelectedAttributes((prev) => ({
      ...prev,
      [attribute]: valueSlug,
    }));
  };

  const handleAddToCart = () => {
    addItem({
      product: product,
      selectedAttributes: selectedAttributes,
      quantity: 1,
    });
    setIsCartOpen(true);
  };

  const allSelected = product.attributes.every(
    (attributeSet) => selectedAttributes[attributeSet.slug],
  );

  const tooltipText = product.inStock
    ? allSelected
      ? "Add item to the cart."
      : "Select product attributes first"
    : "Item out of stock.";

  return (
    <div className="flex w-74 flex-col">
      <ProductName>{product.name}</ProductName>
      <form name="productAttributes">
        {product.attributes.map((attributeSet: AttributeSetType, index) => (
          <AttributeSet
            key={index}
            attributeSet={attributeSet}
            onChange={handleAttributeChange}
          />
        ))}
      </form>
      <div className="mb-6">
        <AttributeTitle>PRICE:</AttributeTitle>
        <PriceTag
          className="py-2 font-raleway text-2xl font-bold"
          price={product.prices[0]}
        />
      </div>
      <div className="mb-12">
        <PrimaryButton
          title={tooltipText}
          onClick={handleAddToCart}
          disabled={!(product.inStock && allSelected)}
          data-testid='add-to-cart'
        >
          {product.inStock ? "Add to cart" : "Out of stock"}
        </PrimaryButton>
      </div>
      <div className="font-roboto" data-testid='product-description'>{HTMLReactParser(product.description)}</div>
    </div>
  );
};

export default ProductInfo;
