import { GalleryPartProps } from "@/types/ComponentTypes";

const ThumbnailList: React.FC<GalleryPartProps> = ({
  urls,
  selectedImage,
  setSelectedImage,
}) => {
  return (
      <div className="flex flex-row flex-nowrap px-5 md:px-0 gap-x-5 md:flex-col md:h-full md:min-w-fit md:gap-x-0 md:gap-y-5 overflow-scroll no-scrollbar md:pr-5" >
        {urls.map((url, index) => (
          <figure className="min-w-fit">
            <img
              key={index}
              src={url}
              alt={`Thumbnail ${index + 1}`}
              className={`size-20 object-contain cursor-pointer border  ${
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
