import { AttributeInputProps } from "@/types/ComponentTypes";
import React from "react";

export const SwatchAttributeInput: React.FC<AttributeInputProps> = ({
  setSlug,
  attributeValue,
  onChange,
  isSelected,
}) => {
  const inputId = `${setSlug}-${attributeValue.slug}`;

  return (
    <label
      htmlFor={inputId}
      className="cursor-pointer"
      data-testid={`product-attribute-${setSlug}-${attributeValue.displayValue}`}
    >
      <input
        type="radio"
        id={inputId}
        name={setSlug}
        value={attributeValue.slug}
        className="sr-only"
        checked={isSelected}
        onChange={() => onChange(attributeValue.slug)}
      />
      <span
        className={`block size-8 transition-all duration-200 ${attributeValue.slug === "white" ? "border border-shark" : ""} ${isSelected ? "outline-2 outline-offset-1 outline-primary" : ""} `}
        style={{ backgroundColor: attributeValue.value }}
        title={attributeValue.displayValue}
      />
    </label>
  );
};
