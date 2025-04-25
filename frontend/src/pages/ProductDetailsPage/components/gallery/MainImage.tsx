import { GalleryPartProps } from "@/types/ComponentTypes";
import { NavButton } from "./NavButton";

export const MainImage: React.FC<GalleryPartProps> = ({
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
    <figure className="relative mb-5 h-[60vh] min-h-[480px] w-full items-center md:mb-0 md:h-[30vw] md:min-h-auto">
      <img
        src={selectedImage}
        alt="Selected"
        className="size-full shrink-0 object-contain"
      />
      {urls.length > 1 && (
        <>
          <NavButton
            onClick={() => changeImage(1)}
            className="absolute top-0 right-0"
          />
          <NavButton
            onClick={() => changeImage(-1)}
            className="absolute top-0 left-0 rotate-180"
          />
        </>
      )}
    </figure>
  );
};
