import { ComponentType } from "react";
import TextAttribute from "./TextAttribute";
import SwatchAttribute from "./SwatchAttribute";
import { AttributeSetType } from "@/types/DomainModels";
import { AttributeValueProps } from "@/types/ComponentTypes";


export const AttributeTypeMap: Record<AttributeSetType, ComponentType<AttributeValueProps>> = {
    "text": TextAttribute,
    "swatch": SwatchAttribute,
}