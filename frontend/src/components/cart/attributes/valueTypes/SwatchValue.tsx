import { AttributeValueProps } from "@/types/ComponentTypes";
import React from "react";

const SwatchValue: React.FC<AttributeValueProps> = ({
  attributeValue,
  isSelected,
}) => {
  // TODO: more robust bright color filter
  return (
    <span
      className={`
        block size-4
        ${attributeValue.slug === "white" && "border border-shark"}
        ${isSelected && "outline-1 outline-offset-1 outline-primary"}
        `}
      style={{ backgroundColor: attributeValue.value }}
    />
  );
};

export default SwatchValue;
