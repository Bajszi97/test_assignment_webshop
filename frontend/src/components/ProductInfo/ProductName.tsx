import { HtmlHTMLAttributes } from "react";

export default function ProductName({ children, className = '', ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) {
    return <h1 {...props} className={`font-raleway text-3xl font-semibold mb-5 ${className}`}>{children}</h1>

}