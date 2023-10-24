import React from "react";

export default function TeamCard({ imgUrl, name, job, socialIcons }) {
  return (
    <div className="border border-gray-150 rounded-[30px] p-6">
      <div className="rounded-t-3xl overflow-hidden">
        <img className="w-full" src={imgUrl} alt="" />
      </div>
      <div className="py-6 space-y-6">
        <div className="h-[2.5px] w-[80px] bg-primary mx-auto mt-2"></div>
        <div className="text-center">
          <h3 className="text-2xl text-primary font-semibold">{name}</h3>
          <p className="text-lg text-dark">{job}</p>
        </div>
        <div className="flex justify-center gap-2.5">{socialIcons}</div>
      </div>
    </div>
  );
}
