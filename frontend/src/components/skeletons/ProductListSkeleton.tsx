const ProductListSkeleton: React.FC = () => {
    return (
        <div className="pt-10 px-5 lg:px-0">
            <div className="bg-gray-200 animate-pulse rounded-md h-10 w-32"></div>
            <section className="mt-10 grid grid-cols-1 justify-items-center gap-16 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="bg-gray-200 animate-pulse w-full rounded-md">
                            <div className="aspect-square w-full">

                            </div>
                        </div>
                ))}
            </section>
        </div>
    )
}

export default ProductListSkeleton;