import { GalleryPartProps } from "@/types/ComponentTypes";

const ThumbnailList: React.FC<GalleryPartProps> = ({
  urls,
  selectedImage,
  setSelectedImage,
}) => {
  return (
      <div className="flex flex-row flex-nowrap px-5 lg:px-0 gap-x-5 lg:flex-col lg:h-full lg:min-w-fit lg:gap-x-0 lg:gap-y-5 overflow-scroll no-scrollbar lg:pr-5" >
        {urls.map((url, index) => (
          <div className="min-w-fit">
            <img
              key={index}
              src={url}
              alt={`Thumbnail ${index + 1}`}
              className={`size-20 object-contain cursor-pointer border  ${
                selectedImage === url ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(url)}
            />
          </div>
        ))}
      </div>
  );
};

export default ThumbnailList;
