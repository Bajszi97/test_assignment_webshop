import { GalleryPartProps } from "@/types/ComponentTypes";

const MainImage: React.FC<GalleryPartProps> = ({
  selectedImage,
  setSelectedImage,
  urls,
}) => {
  // TODO these two function looks nearly identical, could be simplified?
  const handleNextImage = () => {
    const currentIndex = urls.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % urls.length;
    setSelectedImage(urls[nextIndex]);
  };

  const handlePreviousImage = () => {
    const currentIndex = urls.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + urls.length) % urls.length;
    setSelectedImage(urls[prevIndex]);
  };

  // TODO simplify and abstract chevron buttons
  return (
    <div className="relative w-full max-h-[480px] lg:max-h-none lg:w-[575px] mb-5 lg:mb-5">
      <img
        src={selectedImage}
        alt="Selected"
        className="size-full object-contain"
      />
      {urls.length > 1 && (
        <>
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-transparent transition-colors duration-500 ease-in-out hover:from-gray-200 hover:to-transparent">
            <button
              onClick={handlePreviousImage}
              className="h-full w-full cursor-pointer p-2"
            >
              <div className="size-8 rotate-180">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="100" height="100" fill="#444" />
                  <path
                    d="M40 25 L60 50 L40 75"
                    stroke="white"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-transparent transition-colors duration-500 ease-in-out hover:from-gray-200 hover:to-transparent">
            <button
              onClick={handleNextImage}
              className="h-full w-full cursor-pointer p-2"
            >
              <div className="size-8">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="100" height="100" fill="#444" />
                  <path
                    d="M40 25 L60 50 L40 75"
                    stroke="white"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MainImage;
