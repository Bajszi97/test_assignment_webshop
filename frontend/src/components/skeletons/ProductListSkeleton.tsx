const ProductListSkeleton: React.FC = () => {
  return (
    <div className="px-5 pt-10 lg:px-0">
      <div className="h-10 w-32 animate-pulse rounded-md bg-gray-200"></div>
      <section className="mt-10 grid grid-cols-1 justify-items-center gap-16 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-full animate-pulse rounded-md bg-gray-200"
          >
            <div className="aspect-square w-full"></div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductListSkeleton;
