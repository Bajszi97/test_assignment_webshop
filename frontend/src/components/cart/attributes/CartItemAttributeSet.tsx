import React from "react";
import { AttributeTypeMap } from "./valueTypes";
import { AttributeSet, AttributeValue } from "@/types/DomainModels";

interface CartItemAttributeSetProps {
  attributeSet: AttributeSet;
  selectedValue: string;
}

const CartItemAttributeSet: React.FC<CartItemAttributeSetProps> = ({
  attributeSet,
  selectedValue,
}) => {
  const { slug, name, type, items } = attributeSet;
  const AttributeValue = AttributeTypeMap[type];

  return (
    <div data-testid={`cart-item-attribute-${slug}`}>
      <p className="mb-1 text-sm leading-tight">{name}:</p>
      <div className="flex w-full flex-wrap gap-2">
        {items.map((attributeValue: AttributeValue, index) => (
          <AttributeValue
            key={index}
            setSlug={slug}
            attributeValue={attributeValue}
            isSelected={attributeValue.slug === selectedValue}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItemAttributeSet;
