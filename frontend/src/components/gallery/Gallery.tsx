import { useState } from 'react';
import MainImage from './MainImage';
import ThumbnailList from './ThumbnailList';

const Gallery: React.FC<{ urls: string[] }> = ({ urls }) => {
    const [selectedImage, setSelectedImage] = useState<string>(urls[0] || "");

    return (
        <div className="flex h-[480px]">
            <div className="h-full overflow-scroll no-scrollbar">
                <ThumbnailList urls={urls} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            </div>

            <div className="relative flex justify-center w-[575px] h-full ">
                <MainImage urls={urls} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            </div>
        </div>
    );
};

export default Gallery;