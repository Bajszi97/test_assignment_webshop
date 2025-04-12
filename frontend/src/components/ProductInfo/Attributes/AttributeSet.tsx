import { useState } from "react";
import { AttributeSetProps, AttributeValue } from "../../../utils/types";
import AttributeTitle from "./AttributeTitle";
import { AttributeTypeMap } from "./Types";

export default function AttributeSet({ attributeSet, onChange }: AttributeSetProps) {
    const { slug, name, type, items } = attributeSet;
    const AttributeButton = AttributeTypeMap[type];

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (valueSlug: string) => {
        setSelectedValue(valueSlug);
        onChange(slug, valueSlug);
    };

    return (
        <div className="mb-5">
            <AttributeTitle>{name}:</AttributeTitle>
            <div className="w-full flex flex-wrap gap-3">
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
    )
}