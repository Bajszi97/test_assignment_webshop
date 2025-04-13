import HTMLReactParser from "html-react-parser/lib/index";
import { AttributeSet as AttributeSetType, Product } from "@/types/DomainModels";
import AttributeTitle from "./attributes/AttributeTitle";
import AttributeSet from "./attributes/AttributeSet";
import { useState } from "react";
import ProductName from "./ProductName";
import PriceTag from "./PriceTag";
import AddToCartButton from "./AddToCartButton";

const ProductInfo: React.FC<{ product: Product }> = ({ product }) => {
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

export default ProductInfo;