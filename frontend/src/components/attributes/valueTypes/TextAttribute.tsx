import { AttributeValueProps } from "@/types/ComponentTypes";
import React from "react";

const TextAttribute: React.FC<AttributeValueProps> = ({
  attributeValue,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={
        `flex h-11 min-w-16 items-center justify-center border font-source-sans text-base transition-colors
        ${isSelected ? "bg-shark text-white" : "hover:bg-neutral-100"}`
      }
    >
      <button
        className="size-full cursor-pointer px-2"
        onClick={() => onClick(attributeValue.slug)}
        disabled={isSelected}
        title={attributeValue.displayValue}
      >
        {attributeValue.displayValue}
      </button>
    </div>
  );
};

export default TextAttribute;
