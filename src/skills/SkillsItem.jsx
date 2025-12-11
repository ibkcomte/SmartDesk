// SkillItem.jsx
import React from "react";
import SkillsSection from "./SkillsSection";
const SkillItem = ({ skill, percentage, description }) => {
  // Calculate the position of the marker (e.g., 85% = 85)
  const markerPosition = `${percentage}%`;

  return (
    <div className="text-center">
      {/* Skill Name and Percentage */}
      <div className="flex justify-between items-end mb-4 px-2">
        <h3 className="text-2xl font-bold text-gray-700">{skill}</h3>
        <span className="text-xl font-extrabold text-[#38a86a]">{percentage}%
        </span>
      </div>

      {/*Placeholder Text (from the image) */}
       <p className="text-sm text-gray-500 mb-8 leading-relaxed px-2">{description}</p>
      

      {/* --- Custom Progress Bar/Slider --- */}
      <div className="relative h-px bg-gray-300 mx-auto w-full max-w-sm">
        {/* The "filled" line (green line showing progress) */}
        <div
          className="absolute top-0 left-0 h-px bg-[#38a86a]"
          style={{ width: markerPosition }}
        ></div>

        {/* The Green Marker/Dot */}
        <div
          className="absolute -top-2 w-4 h-4 rounded-full bg-[#38a86a] border-2 border-white shadow-md"
          style={{ left: markerPosition, transform: "translateX(-50%)" }} // translateX(-50%) centers the dot over the percentage point
        ></div>
      </div>
    </div>
  );
};

export default SkillItem;
