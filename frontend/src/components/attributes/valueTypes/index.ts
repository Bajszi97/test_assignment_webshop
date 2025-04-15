import { ComponentType } from "react";
import TextAttributeInput from "./TextAttributeInput";
import SwatchAttributeInput from "./SwatchAttributeInput";
import { AttributeSetType } from "@/types/DomainModels";
import { AttributeInputProps } from "@/types/ComponentTypes";

export const AttributeInputTypeMap: Record<
  AttributeSetType,
  ComponentType<AttributeInputProps>
> = {
  text: TextAttributeInput,
  swatch: SwatchAttributeInput,
};
