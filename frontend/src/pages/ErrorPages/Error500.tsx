import { FallbackProps } from "react-error-boundary"
import { useNavigate } from "react-router"

export const Error500: React.FC<FallbackProps> = ({ resetErrorBoundary }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        resetErrorBoundary();
        navigate('/');
    }

    return (
        <div className="w-full mt-50 flex flex-col items-center justify-center">
            <span className="text-2xl">500 Internal Server Error</span>
            <button onClick={handleClick} className="text-indigo-500 hover:text-primary transition-colors">Go back to home</button>
        </div>
    )
}