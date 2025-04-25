import { FallbackProps } from "react-error-boundary";
import { useNavigate } from "react-router";

export const Error500: React.FC<FallbackProps> = ({ resetErrorBoundary }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    resetErrorBoundary();
    navigate("/");
  };

  return (
    <div className="mt-50 flex w-full flex-col items-center justify-center">
      <span className="text-2xl">500 Internal Server Error</span>
      <button
        onClick={handleClick}
        className="text-indigo-500 transition-colors hover:text-primary"
      >
        Go back to home
      </button>
    </div>
  );
};
