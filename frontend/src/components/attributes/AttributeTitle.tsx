import React, { HtmlHTMLAttributes } from "react";

const AttributeTitle: React.FC<HtmlHTMLAttributes<HTMLHeadingElement>> = ({ children, className = '', ...props }) => {
    return <h2 {...props} className={`font-roboto-condensed text-lg font-bold pb-1 uppercase ${className}`}>{children}</h2>

}

export default AttributeTitle;