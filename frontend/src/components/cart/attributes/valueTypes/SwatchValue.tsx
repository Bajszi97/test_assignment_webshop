import { AttributeValueProps } from "@/types/ComponentTypes";
import React from "react";

const SwatchValue: React.FC<AttributeValueProps> = ({
  attributeValue,
  isSelected,
}) => {
  // TODO: more robust bright color filter
  return (
    <div
      className={`size-4 border ${isSelected && "outline-2 outline-primary"} ${attributeValue.slug === "white" ? "border-shark" : "border-white"} `}
      style={{ backgroundColor: attributeValue.value }}
    />
  );
};

export default SwatchValue;
