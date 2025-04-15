import { AttributeInputProps } from "@/types/ComponentTypes";
import React from "react";

const SwatchAttributeInput: React.FC<AttributeInputProps> = ({
  setName,
  attributeValue,
  onChange,
  isSelected,
}) => {
  const inputId = `${setName}-${attributeValue.slug}`;

  return (
    <label htmlFor={inputId} className="cursor-pointer">
      <input
        type="radio"
        id={inputId}
        name={setName}
        value={attributeValue.slug}
        className="sr-only"
        checked={isSelected}
        onChange={() => onChange(attributeValue.slug)}
      />
      <span
        className={`
          block size-8 transition-all duration-200 
          ${attributeValue.slug === "white" && "border border-shark"}
          ${isSelected && "outline-2 outline-offset-1 outline-primary"}
          `}
        style={{ backgroundColor: attributeValue.value }}
        title={attributeValue.displayValue}
      />
    </label>
  );
};

export default SwatchAttributeInput;
