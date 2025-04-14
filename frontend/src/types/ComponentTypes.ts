import { Dispatch, SetStateAction } from "react";
import { AttributeValue } from "./DomainModels";

export interface GalleryPartProps {
  urls: string[];
  selectedImage: string;
  setSelectedImage: Dispatch<SetStateAction<string>>;
}

export interface AttributeValueProps {
  attributeValue: AttributeValue;
  isSelected: boolean;
}

export interface AttributeButtonProps extends AttributeValueProps{
  onClick: (value: string) => void;
}


