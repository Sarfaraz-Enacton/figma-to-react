import React from "react";
import { Link } from "react-router-dom";

export const Button = ({
  variants,
  text,
  customClass,
  rightArrowIcon,
  role,
  link,
  onClick,
}) => {
  const styles = {
    primary: "bg-primary text-light hover:bg-transparent hover:text-primary",
    secondary: "bg-transparent text-primary hover:bg-primary hover:text-light",
  };

  return (
    <>
      {role === "link" ? (
        <Link
          className={`${styles[variants]} flex items-center gap-2 px-6 lg:px-10 py-2 lg:py-4 border-2 border-primary font-semibold text-lg rounded-lg cursor-pointer transition-all ease-in-out duration-300 ${customClass}`}
          href={link}
        >
          {text}
          {rightArrowIcon}
        </Link>
      ) : (
        <button
          className={`${styles[variants]} flex items-center gap-2 px-6 lg:px-10 py-2 lg:py-4 border-2 border-primary font-semibold text-lg rounded-lg cursor-pointer transition-all ease-in-out duration-300 ${customClass}`}
          onClick={onClick}
        >
          {text}
          {rightArrowIcon}
        </button>
      )}
    </>
  );
};
