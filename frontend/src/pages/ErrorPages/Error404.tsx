import { Link } from "react-router";

export const Error404: React.FC = () => {
  return (
    <div className="mt-50 flex w-full flex-col items-center justify-center">
      <span className="text-2xl">404 Page Not Found</span>
      <Link
        to="/"
        className="text-indigo-500 transition-colors hover:text-primary"
      >
        Go back to home
      </Link>
    </div>
  );
};
