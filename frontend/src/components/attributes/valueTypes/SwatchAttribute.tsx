import { AttributeButtonProps } from "@/types/ComponentTypes";
import React from "react";

const SwatchAttribute: React.FC<AttributeButtonProps> = ({
  attributeValue,
  onClick,
  isSelected,
}) => {
  // TODO: more robust bright color filter
  return (
    <div
      className={`size-8 border ${isSelected && "outline-2 outline-primary"} ${attributeValue.slug === "white" ? "border-shark" : "border-white"} `}
      style={{ backgroundColor: attributeValue.value }}
    >
      <button
        className="size-full cursor-pointer px-2"
        onClick={() => onClick(attributeValue.slug)}
        disabled={isSelected}
        title={attributeValue.displayValue}
      />
    </div>
  );
};

export default SwatchAttribute;
