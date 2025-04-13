import { AttributeValueProps } from "@/types/ComponentTypes";
import React from "react";

const TextAttribute: React.FC<AttributeValueProps> = ({ attributeValue, onClick, isSelected }) => {
    return (
        <div className={"min-w-16 h-11 flex items-center justify-center border font-source-sans text-base " + (isSelected && "bg-shark text-white")}>
            <button className="size-full px-2 cursor-pointer" onClick={() => onClick(attributeValue.slug)} disabled={isSelected} title={attributeValue.displayValue}>
                {attributeValue.displayValue}
            </button>
        </div>
    )
}

export default TextAttribute;