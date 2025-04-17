import React, { useState } from "react";
import AttributeTitle from "./AttributeTitle";
import { AttributeInputTypeMap } from "./valueTypes";
import { AttributeSet, AttributeValue } from "@/types/DomainModels";

interface AttributeSetProps {
  attributeSet: AttributeSet;
  onChange: (attribute: string, valueSlug: string) => void;
}

const AttributeSetInput: React.FC<AttributeSetProps> = ({
  attributeSet,
  onChange,
}) => {
  const { slug, name, type, items } = attributeSet;
  const AttributeInput = AttributeInputTypeMap[type];

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (valueSlug: string) => {
    setSelectedValue(valueSlug);
    onChange(slug, valueSlug);
  };

  return (
    <fieldset className="mb-5" data-testid={`product-attribute-${slug}`}>
      <AttributeTitle>{name}:</AttributeTitle>
      <div className="flex w-full flex-wrap gap-3">
        {items.map((attributeValue: AttributeValue, index) => (
          <AttributeInput
            key={index}
            setSlug={slug}
            attributeValue={attributeValue}
            onChange={handleChange}
            isSelected={attributeValue.slug === selectedValue}
          />
        ))}
      </div>
    </fieldset>
  );
};

export default AttributeSetInput;
