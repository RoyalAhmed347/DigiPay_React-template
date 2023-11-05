import React from "react";

const WorkCard = ({ icon, heading, desc }) => {
  return (
    <>
      <div className="card">
        <i class={icon}></i>
        <h3>{heading}</h3>
        <p className="para">{desc}</p>
      </div>
    </>
  );
};

export default WorkCard;
