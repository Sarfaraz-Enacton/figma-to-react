import React from "react";

export default function FormInput({ type, placeholder, customClass, id }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full placeholder:text-gray-250 py-4 px-7 border border-gray-250 rounded-md outline-primary caret-primary ${customClass}`}
        id={id}
      />
    </>
  );
}
