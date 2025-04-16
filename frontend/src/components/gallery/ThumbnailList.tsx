import { GalleryPartProps } from "@/types/ComponentTypes";

const ThumbnailList: React.FC<GalleryPartProps> = ({
  urls,
  selectedImage,
  setSelectedImage,
}) => {
  return (
    <div className="no-scrollbar flex flex-row flex-nowrap gap-x-5 overflow-scroll px-5 md:h-full md:min-w-fit md:flex-col md:gap-x-0 md:gap-y-5 md:px-0 md:pr-5">
      {urls.map((url, index) => (
        <figure key={index} className="min-w-fit">
          <img
            src={url}
            alt={`Thumbnail ${index + 1}`}
            className={`size-20 cursor-pointer border object-contain ${
              selectedImage === url ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setSelectedImage(url)}
          />
        </figure>
      ))}
    </div>
  );
};

export default ThumbnailList;
