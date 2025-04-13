import React, { HtmlHTMLAttributes } from "react";

const AttributeTitle: React.FC<HtmlHTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <h2
      {...props}
      className={`pb-1 font-roboto-condensed text-lg font-bold uppercase ${className}`}
    >
      {children}
    </h2>
  );
};

export default AttributeTitle;
