import { GalleryPartProps } from "@/types/ComponentTypes";

const ThumbnailList: React.FC<GalleryPartProps> = ({
  urls,
  selectedImage,
  setSelectedImage,
}) => {
  return (
    <div className="mr-7 flex flex-col">
      {urls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Thumbnail ${index + 1}`}
          className={`mb-5 size-20 cursor-pointer border object-contain last:mb-0 ${
            selectedImage === url ? "border-blue-500" : "border-gray-300"
          }`}
          onClick={() => setSelectedImage(url)}
        />
      ))}
    </div>
  );
};

export default ThumbnailList;
