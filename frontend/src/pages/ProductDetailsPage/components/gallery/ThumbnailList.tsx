import { GalleryPartProps } from "@/types/ComponentTypes";

export const ThumbnailList: React.FC<GalleryPartProps> = ({
  urls,
  selectedImage,
  setSelectedImage,
}) => {
  return (
    <div className="no-scrollbar flex w-full shrink-0 flex-row flex-nowrap gap-x-5 overflow-scroll px-5 py-1 md:w-24 md:flex-col md:gap-y-5 md:p-1">
      {urls.map((url, index) => (
        <button
          key={index}
          className="size-fit shrink-0 cursor-pointer"
          onClick={() => setSelectedImage(url)}
        >
          <img
            src={url}
            alt={`Thumbnail ${index + 1}`}
            className={`size-20 object-contain ${
              selectedImage === url ? "ring-1 ring-blue-500" : ""
            }`}
          />
        </button>
      ))}
    </div>
  );
};
