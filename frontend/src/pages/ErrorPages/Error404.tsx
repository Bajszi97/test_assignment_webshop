import { Link } from "react-router"

export const Error404: React.FC = () => {
    return (
        <div className="w-full mt-50 flex flex-col items-center justify-center">
            <span className="text-2xl">404 Page Not Found</span>
            <Link to="/" className="text-indigo-500 hover:text-primary transition-colors">Go back to home</Link>
        </div>
    )
}