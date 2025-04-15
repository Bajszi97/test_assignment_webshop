import { useState } from "react";
import MainImage from "./MainImage";
import ThumbnailList from "./ThumbnailList";

interface GalleryProps {
  urls: string[];
}

const Gallery: React.FC<GalleryProps> = ({ urls }) => {
  const [selectedImage, setSelectedImage] = useState<string>(urls[0] || "");

  return (
    <div className="flex flex-col-reverse w-full md:w-auto md:flex-row md:max-w-[580px] md:max-h-[580px]">
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
