import { GalleryPartProps } from "@/types/ComponentTypes";

const ThumbnailList: React.FC<GalleryPartProps> = ({
  urls,
  selectedImage,
  setSelectedImage,
}) => {
  return (
    <div className="no-scrollbar w-full md:w-24 shrink-0 flex flex-row flex-nowrap gap-x-5 overflow-scroll px-5 md:flex-col md:gap-y-5 md:p-1">
      {urls.map((url, index) => (
        <button className="size-fit cursor-pointer" onClick={() => setSelectedImage(url)}>
          <img
            src={url}
            alt={`Thumbnail ${index + 1}`}
            className={`size-20 shrink-0 object-contain ${selectedImage === url ? "ring-1 ring-blue-500" : ""
              }`}
          />
        </button>
      ))}
    </div>
  );
};

export default ThumbnailList;
