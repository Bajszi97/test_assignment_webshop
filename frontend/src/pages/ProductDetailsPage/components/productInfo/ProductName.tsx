import { HtmlHTMLAttributes } from "react";

export const ProductName: React.FC<HtmlHTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <h1
      {...props}
      className={`mb-5 font-raleway text-3xl font-semibold ${className}`}
    >
      {children}
    </h1>
  );
};
