import { HtmlHTMLAttributes } from "react";

const ProductName: React.FC<HtmlHTMLAttributes<HTMLHeadingElement>> = ({ children, className = '', ...props }) => {
    return <h1 {...props} className={`font-raleway text-3xl font-semibold mb-5 ${className}`}>{children}</h1>

}

export default ProductName;