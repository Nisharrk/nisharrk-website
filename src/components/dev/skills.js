import React from "react";
import skillsData from "./skillsData";

export default function Skills() {
  return (
    <div className="text-white text-center">
      <div className="text-center ">
        <h3 className="text-3xl ">Skills</h3>
      </div>
      <div>
        {skillsData.map((skill) => (
          <div key={skill.type}>
            <h3 className="text-xl font-bold pt-3 pb-2 text-teal-600">
              {skill.type}
            </h3>
            <p className="text-md font-serif">{skill.name.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
