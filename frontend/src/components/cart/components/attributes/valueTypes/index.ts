import { ComponentType } from "react";
import { TextAttributeValue } from "./TextAttributeValue";
import { SwatchAttributeValue } from "./SwatchAttributeValue";
import { AttributeSetType } from "@/types/DomainModels";
import { AttributeValueProps } from "@/types/ComponentTypes";

export const AttributeTypeMap: Record<
  AttributeSetType,
  ComponentType<AttributeValueProps>
> = {
  text: TextAttributeValue,
  swatch: SwatchAttributeValue,
};
