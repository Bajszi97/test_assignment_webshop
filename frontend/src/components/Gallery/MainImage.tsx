import { GalleryProps } from "../../utils/types";

export default function MainImage({ selectedImage, setSelectedImage, urls }: GalleryProps) {
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

    return (
        <div className="flex w-full">
            <img
                src={selectedImage}
                alt="Selected"
                className="size-full object-contain"
            />
            {urls.length > 1 && (
                <>
                    <div className='absolute top-0 left-0 h-full w-16 from-transparent hover:from-gray-200 hover:to-transparent bg-gradient-to-r transition-colors duration-500 ease-in-out'>
                        <button
                            onClick={handlePreviousImage}
                            className="p-2 h-full w-full cursor-pointer"
                        >
                            <div className='size-8 rotate-180'>
                                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="100" height="100" fill="#444" />
                                    <path d="M40 25 L60 50 L40 75" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className='absolute top-0 right-0 h-full w-16 from-transparent hover:from-gray-200 hover:to-transparent bg-gradient-to-l transition-colors duration-500 ease-in-out'>
                        <button
                            onClick={handleNextImage}
                            className="p-2 h-full w-full cursor-pointer"
                        >
                            <div className='size-8'>
                                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="100" height="100" fill="#444" />
                                    <path d="M40 25 L60 50 L40 75" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}