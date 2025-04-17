import { Dispatch, SetStateAction } from "react";
import { AttributeValue } from "./DomainModels";

export interface GalleryPartProps {
  urls: string[];
  selectedImage: string;
  setSelectedImage: Dispatch<SetStateAction<string>>;
}

export interface AttributeValueProps {
  setSlug: string;
  attributeValue: AttributeValue;
  isSelected: boolean;
}

export interface AttributeInputProps extends AttributeValueProps {
  onChange: (value: string) => void;
}
