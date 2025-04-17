import { AttributeValueProps } from "@/types/ComponentTypes";
import React from "react";

const SwatchValue: React.FC<AttributeValueProps> = ({
  setSlug,
  attributeValue,
  isSelected,
}) => {
  // TODO: more robust bright color filter
  return (
    <span
      data-testid={`cart-item-attribute-${setSlug}-${attributeValue.slug}${isSelected? "-selected" : ""}`}
      className={`block size-4 first:ms-1 ${attributeValue.slug === "white" ? "border border-shark" : ""} ${isSelected ? "outline-1 outline-offset-1 outline-primary" : ""} `}
      style={{ backgroundColor: attributeValue.value }}
    />
  );
};

export default SwatchValue;
