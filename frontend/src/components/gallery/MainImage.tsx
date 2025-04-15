import { GalleryPartProps } from "@/types/ComponentTypes";
import NavButton from "./NavButton";

const MainImage: React.FC<GalleryPartProps> = ({
  selectedImage,
  setSelectedImage,
  urls,
}) => {

  const changeImage = (direction: 1 | -1) => {
    const currentIndex = urls.indexOf(selectedImage);
    const nextIndex = (currentIndex + direction + urls.length) % urls.length;
    setSelectedImage(urls[nextIndex]);
  };

  return (
    <figure className="relative w-full max-h-[480px] md:max-h-none md:max-w-[575px] md:min-w-[280px] mb-5 lg:mb-5">
      <img
        src={selectedImage}
        alt="Selected"
        className="size-full object-contain"
      />
      {urls.length > 1 && (
        <>
          <NavButton onClick={() => changeImage(1)} className="absolute top-0 right-0" />
          <NavButton onClick={() => changeImage(-1)} className="absolute top-0 left-0 rotate-180" />
        </>
      )}
    </figure>
  );
};

export default MainImage;
