import { useState } from "react";
import MainImage from "./MainImage";
import ThumbnailList from "./ThumbnailList";

interface GalleryProps {
  urls: string[];
}

const Gallery: React.FC<GalleryProps> = ({ urls }) => {
  const [selectedImage, setSelectedImage] = useState<string>(urls[0] || "");

  return (
    <div className="flex h-[480px]">
      <div className="no-scrollbar h-full overflow-scroll">
        <ThumbnailList
          urls={urls}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>

      <div className="relative flex h-full w-[575px] justify-center">
        <MainImage
          urls={urls}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
    </div>
  );
};

export default Gallery;
