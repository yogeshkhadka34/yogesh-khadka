import React from "react";

interface ButtonProps {
  children: string | React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button className={`px-6 py-2 rounded-sm ${className}`}>{children}</button>
  );
};

export default Button;
