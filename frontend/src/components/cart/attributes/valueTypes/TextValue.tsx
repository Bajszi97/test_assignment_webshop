import { AttributeValueProps } from "@/types/ComponentTypes";
import React from "react";

const TextValue: React.FC<AttributeValueProps> = ({
  attributeValue,
  isSelected,
}) => {
  return (
    <div
      className={
        `flex h-6 min-w-6 px-1 items-center justify-center border font-source-sans text-sm transition-colors
        ${isSelected ? "bg-shark text-white" : "hover:bg-neutral-100"}`
      }
    >
        {attributeValue.value}
    </div>
  );
};

export default TextValue;
