// SkillsSection.jsx

import React from "react";
import SkillItem from "../skills/SkillsItem.jsx"; 

const SkillsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Section Header --- */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold tracking-wide uppercase text-gray-800">
            PROFESSIONAL SKILLS
          </h2>
          <p className="text-sm font-light tracking-widest text-[#38a86a] mt-1">
            MY <span className="font-serif italic">Talent</span>
          </p>
        </div>

        {/* --- Skills Grid --- */}
        {/* Uses Tailwind's grid for a responsive 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Data is passed down to the reusable component */}
          <SkillItem
            skill="Technical Proficiency"
            percentage={98}
            description="
        HTML (Structure), CSS (Presentation), and JavaScript (Logic). Specialize in using modern tool to build scalable and maintainable applications"
          />
          <SkillItem
            skill="Visuals & Usability"
            percentage={99}
            description="For every site built, it is ensured that it works flawlessly on a 4K monitor, a standard laptop, an iPad, and a budget Android phone."
          />
          <SkillItem skill="Reliability & Soft Skills" percentage={90} 
           description="With me in your team, you are sure of a frictionless professional relationship."/>

          {/* Add more skills as needed, e.g.: */}
          {/* <SkillItem skill="React" percentage={95} /> */}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
