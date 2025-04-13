import { Dispatch, SetStateAction } from "react";
import { AttributeValue } from "./DomainModels";

export interface GalleryPartProps {
  urls: string[];
  selectedImage: string;
  setSelectedImage: Dispatch<SetStateAction<string>>;
}

export interface AttributeValueProps {
  attributeValue: AttributeValue;
  onClick: (value: string) => void;
  isSelected: boolean;
}
