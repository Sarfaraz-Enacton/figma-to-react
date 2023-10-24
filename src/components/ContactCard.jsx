import React from "react";

export default function ContactCard({ badge, icon, title, description }) {
  return (
    <div className="bg-card rounded-lg p-6">
      <div className="bg-light rounded-md shadow px-6 py-5 h-full">
        <div className="border-b border-gray-100 pb-4">
          <a
            href=""
            className="inline-block bg-primary text-white text-xl py-2 px-6 rounded-full"
          >
            {badge}
          </a>
        </div>
        <div className="pt-4 flex gap-2">
          <div className="text-secondary flex-shrink-0">{icon}</div>
          <div className="">
            <h5 className="text-2xl text-primary font-semibold">{title}</h5>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
