import { GalleryPartProps } from "@/types/ComponentTypes";

const ThumbnailList: React.FC<GalleryPartProps> = ({
  urls,
  selectedImage,
  setSelectedImage,
}) => {
  return (
    <div className="no-scrollbar w-full md:w-24 shrink-0 flex flex-row flex-nowrap gap-x-5 overflow-scroll px-5 md:flex-col md:gap-y-5 md:px-0 md:ps-1 md:pt-1 ">
      {urls.map((url, index) => (
        <img
          src={url}
          alt={`Thumbnail ${index + 1}`}
          className={`size-20 shrink-0 cursor-pointer  object-contain ${selectedImage === url ? "ring-1 ring-blue-500" : ""
            }`}
          onClick={() => setSelectedImage(url)}
        />
      ))}
    </div>
  );
};

export default ThumbnailList;
