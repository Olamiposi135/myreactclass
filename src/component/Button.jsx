import React from "react";

const Button = ({ label, className }) => {
  return (
    <div className={`px-4 py-3 w-full text-center rounded-md ${className}`}>
      {label}
    </div>
  );
};

export default Button;
