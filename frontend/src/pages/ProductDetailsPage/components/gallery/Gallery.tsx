import { useState } from "react";
import { MainImage } from "./MainImage";
import { ThumbnailList } from "./ThumbnailList";

interface GalleryProps {
  urls: string[];
}

export const Gallery: React.FC<GalleryProps> = ({ urls }) => {
  const [selectedImage, setSelectedImage] = useState<string>(urls[0] || "");

  return (
    <div
      className="sticky top-16 flex w-full flex-col-reverse justify-center md:h-[30vw] md:max-h-[720px] md:min-h-[380px] md:max-w-[580px] md:flex-row md:justify-end"
      data-testid="product-gallery"
    >
      <ThumbnailList
        urls={urls}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />

      <MainImage
        urls={urls}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </div>
  );
};
