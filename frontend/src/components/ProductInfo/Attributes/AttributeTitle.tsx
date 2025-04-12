import { HtmlHTMLAttributes } from "react";

export default function AttributeTitle({ children, className = '', ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) {
    return <h2 {...props} className={`font-roboto-condensed text-lg font-bold pb-1 uppercase ${className}`}>{children}</h2>

}