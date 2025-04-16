const NavBarSkeleton: React.FC = () => {
  return (
    <div className="flex w-full items-center space-x-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="h-6 w-20 animate-pulse rounded-md bg-gray-200"
        ></div>
      ))}
    </div>
  );
};

export default NavBarSkeleton;
