import React, { HtmlHTMLAttributes } from "react";

const AttributeTitle: React.FC<HtmlHTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <legend
      {...props}
      className={`pb-1 font-roboto-condensed text-lg font-bold uppercase ${className}`}
    >
      {children}
    </legend>
  );
};

export default AttributeTitle;
