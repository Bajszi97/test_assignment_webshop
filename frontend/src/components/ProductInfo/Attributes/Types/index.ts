import { ComponentType } from "react";
import TextAttribute from "./TextAttribute";
import SwatchAttribute from "./SwatchAttribute";
import { AttributeSetType, AttributeValueProps } from "../../../../utils/types";

export const AttributeTypeMap: Record<AttributeSetType, ComponentType<AttributeValueProps>> = {
    "text": TextAttribute,
    "swatch": SwatchAttribute,
} 