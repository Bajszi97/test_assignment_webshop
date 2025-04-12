import { AttributeValueProps } from "../../../../utils/types";

export default function SwatchAttribute({ attributeValue, onClick, isSelected }: AttributeValueProps) {

    // TODO: more robust bright color filter
    return (
        <div className={`
            size-8 border 
            ${isSelected && "outline outline-primary"} 
            ${attributeValue.slug === "white" ? "border-shark" : "border-white"}
            `}
            style={{ backgroundColor: attributeValue.value }
            }>
            <button className="size-full px-2 cursor-pointer" onClick={() => onClick(attributeValue.slug)} disabled={isSelected}/>
        </div>
    )
}