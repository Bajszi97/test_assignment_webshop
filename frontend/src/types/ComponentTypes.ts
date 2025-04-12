import { Dispatch, SetStateAction, HTMLAttributes, PropsWithChildren } from "react";
import { Price, AttributeSet, AttributeValue } from "./DomainModels";

export interface GalleryProps extends PropsWithChildren {
  urls: string[];
  selectedImage: string;
  setSelectedImage: Dispatch<SetStateAction<string>>;
}

export interface AttributeSetProps extends PropsWithChildren {
  attributeSet: AttributeSet;
  onChange: (attribute: string, valueSlug: string) => void;
}

export interface AttributeValueProps extends PropsWithChildren {
  attributeValue: AttributeValue;
  onClick: (value: string) => void;
  isSelected: boolean;
}

export interface PriceTagProps extends HTMLAttributes<HTMLDivElement> {
  price: Price;
}