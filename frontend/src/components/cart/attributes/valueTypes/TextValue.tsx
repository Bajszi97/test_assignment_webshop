import { AttributeValueProps } from "@/types/ComponentTypes";
import React from "react";

const TextValue: React.FC<AttributeValueProps> = ({
  attributeValue,
  isSelected,
}) => {
  return (
    <span
      className={`flex h-6 min-w-6 items-center justify-center border px-1 font-source-sans text-sm transition-colors ${isSelected ? "bg-shark text-white" : "hover:bg-neutral-100"}`}
    >
      {attributeValue.value}
    </span>
  );
};

export default TextValue;
