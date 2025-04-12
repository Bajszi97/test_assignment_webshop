import { GalleryProps } from "@/types/ComponentTypes";

export default function ThumbnailList({ urls, selectedImage, setSelectedImage }: GalleryProps) {
    return (
        <div className="flex flex-col mr-7">
            {urls.map((url, index) => (
                <img
                    key={index}
                    src={url}
                    alt={`Thumbnail ${index + 1}`}
                    className={`size-20 object-contain mb-5 last:mb-0 cursor-pointer border ${selectedImage === url ? 'border-blue-500' : 'border-gray-300'
                        }`}
                    onClick={() => setSelectedImage(url)}
                />
            ))}
        </div>
    )
}