import { AttributeInputProps } from "@/types/ComponentTypes";
import React from "react";

export const TextAttributeInput: React.FC<AttributeInputProps> = ({
  setSlug,
  attributeValue,
  onChange,
  isSelected,
}) => {
  const inputId = `${setSlug}-${attributeValue.slug}`;

  return (
    <label htmlFor={inputId} className="cursor-pointer" data-testid={`product-attribute-${setSlug}-${attributeValue.displayValue}`}>
      <input
        type="radio"
        id={inputId}
        name={setSlug}
        value={attributeValue.slug}
        className="peer sr-only"
        checked={isSelected}
        onChange={() => onChange(attributeValue.slug)}
      />
      <span
        className={`flex h-11 min-w-16 items-center justify-center border font-source-sans text-base transition-colors ${isSelected ? "bg-shark text-white" : "hover:bg-neutral-100"} `}
        title={attributeValue.displayValue}
      >
        {attributeValue.value}
      </span>
    </label>
  );
};
