import { useState } from "react";
import MainImage from "./MainImage";
import ThumbnailList from "./ThumbnailList";

interface GalleryProps {
  urls: string[];
}

const Gallery: React.FC<GalleryProps> = ({ urls }) => {
  const [selectedImage, setSelectedImage] = useState<string>(urls[0] || "");

  return (
    <div className="sticky top-16 flex w-full flex-col-reverse md:max-h-[580px] md:w-auto md:max-w-[580px] md:flex-row" data-testid='product-gallery'>
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

export default Gallery;
