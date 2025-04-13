import React, { useState } from "react";
import AttributeTitle from "./AttributeTitle";
import { AttributeTypeMap } from "./valueTypes";
import {
  AttributeSet as AttributeSetModel,
  AttributeValue,
} from "@/types/DomainModels";

interface AttributeSetProps {
  attributeSet: AttributeSetModel; // AttributeSet type renamed not to conflict with the component's name
  onChange: (attribute: string, valueSlug: string) => void;
}

const AttributeSet: React.FC<AttributeSetProps> = ({
  attributeSet,
  onChange,
}) => {
  const { slug, name, type, items } = attributeSet;
  const AttributeButton = AttributeTypeMap[type];

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (valueSlug: string) => {
    setSelectedValue(valueSlug);
    onChange(slug, valueSlug);
  };

  return (
    <div className="mb-5">
      <AttributeTitle>{name}:</AttributeTitle>
      <div className="flex w-full flex-wrap gap-3">
        {items.map((attributeValue: AttributeValue, index) => (
          <AttributeButton
            key={index}
            attributeValue={attributeValue}
            onClick={handleChange}
            isSelected={attributeValue.slug === selectedValue}
          />
        ))}
      </div>
    </div>
  );
};

export default AttributeSet;
