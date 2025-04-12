import HTMLReactParser from "html-react-parser/lib/index";
import { AttributeSet as AttributeSetType, Product } from "../utils/types";
import AttributeTitle from "./ProductInfo/Attributes/AttributeTitle";
import AttributeSet from "./ProductInfo/Attributes/AttributeSet";
import { useState } from "react";
import ProductName from "./ProductInfo/ProductName";

export default function ProductInfo({ product }: { product: Product }) {
    const [selectedAttributes, setSelectedAttributes] = useState([]);

    const handleAttributeChange = (attribute: string, valueSlug: string) => {
        setSelectedAttributes(prev => ({
            ...prev,
            [attribute]: valueSlug,
        }));
    };

    const handleAddToCart = () => {
        console.log(selectedAttributes, product);
    };

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
                <div className="font-raleway font-bold text-2xl py-2">
                    {product.prices[0].currency.symbol}
                    {product.prices[0].amount}
                </div>
            </div>
            <div className="mb-12">
                <button className="uppercase w-full h-12 bg-primary text-white" onClick={handleAddToCart}>
                    ADD TO CART
                </button>
            </div>
            <div className="font-roboto">
                {HTMLReactParser(product.description)}
            </div>

        </div>
    )
} 