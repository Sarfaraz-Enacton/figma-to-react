import React from "react";

export default function FormTextArea({ id, customClass, placeholder }) {
  return (
    <textarea
      name="textarea"
      id={id}
      cols="30"
      rows="11"
      className={`block w-full placeholder:text-gray-250 py-4 px-7 border border-gray-250 rounded-md outline-primary caret-primary ${customClass}`}
      placeholder={placeholder}
    ></textarea>
  );
}
