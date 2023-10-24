import React from "react";

export const SectionHeader = ({ variants, children, icon, customClass }) => {
  const styles = {
    horizontal: "flex-row lg:gap-x-10",
    vertical: "flex-col lg:gap-y-9 justify-center text-center mx-auto",
  };
  return (
    <div className={`flex gap-6 ${styles[variants]} w-fit ${customClass}`}>
      <div className="max-w-[60px] lg:max-w-[88px] mx-auto flex-shrink-0">
        <img className="my-auto w-full" src={icon} alt={icon} />
      </div>
      <div className="flex flex-col gap-y-4">{children}</div>
    </div>
  );
};

const Hint = ({ children, customClass }) => {
  return (
    <h5 className={`text-dark text-base uppercase font-medium ${customClass}`}>
      <span className="text-secondary pr-2">//</span>
      {children}
    </h5>
  );
};
const Title = ({ children, customClass }) => {
  return (
    <h2
      className={`text-3xl lg:text-4xl text-primary font-semibold ${customClass}`}
    >
      {children}
    </h2>
  );
};
SectionHeader.Hint = Hint;
SectionHeader.Title = Title;
