import HTMLReactParser from "html-react-parser/lib/index";
import { AttributeSet as AttributeSetType, Product } from "../utils/types";
import AttributeTitle from "./ProductInfo/Attributes/AttributeTitle";
import AttributeSet from "./ProductInfo/Attributes/AttributeSet";
import { useState } from "react";
import ProductName from "./ProductInfo/ProductName";
import PriceTag from "./ProductInfo/PriceTag";
import AddToCartButton from "./ProductInfo/AddToCartButton";

export default function ProductInfo({ product }: { product: Product }) {
    const [selectedAttributes, setSelectedAttributes] = useState<Record<string, string>>({});

    const handleAttributeChange = (attribute: string, valueSlug: string) => {
        setSelectedAttributes(prev => ({
            ...prev,
            [attribute]: valueSlug,
        }));
    };

    const handleAddToCart = () => {
        console.log(selectedAttributes, product);
    };

    const isDisabled = !product.attributes.every(
        attributeSet => selectedAttributes[attributeSet.slug]
    );

    return (
        <div className="flex flex-col w-74">
            <ProductName>{product.name}</ProductName>
            <div className="">
                {product.attributes.map((attributeSet: AttributeSetType, index) =>
                    <AttributeSet key={index} attributeSet={attributeSet} onChange={handleAttributeChange} />
                )}
            </div>
            <div className="mb-6">
                <AttributeTitle>PRICE:</AttributeTitle>
                <PriceTag className="font-raleway font-bold text-2xl py-2" price={product.prices[0]} />
            </div>
            <div className="mb-12">
                <AddToCartButton 
                    onClick={handleAddToCart} 
                    disabled={isDisabled} 
                />
            </div>
            <div className="font-roboto">
                {HTMLReactParser(product.description)}
            </div>
        </div>
    )
} 