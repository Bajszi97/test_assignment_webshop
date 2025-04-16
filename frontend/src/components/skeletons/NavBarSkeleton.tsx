const NavBarSkeleton: React.FC = () => {
    return (
        <div className="flex items-center w-full space-x-4">
            {Array.from({ length: 4 }).map((_, index) => (
                <div
                    key={index}
                    className="h-6 w-20 bg-gray-200 animate-pulse rounded-md"
                ></div>
            ))}
        </div>
    )
}

export default NavBarSkeleton;