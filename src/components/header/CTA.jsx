import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={
          "https://drive.google.com/file/d/1BY1KiblD73y8jBTQ6Mhlxs4mO5AGcB0X/view?usp=sharing"
        }
        download
        className="btn"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
