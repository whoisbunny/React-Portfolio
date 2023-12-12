import React from 'react'


const CTA = () => {
  return (
    <div className="cta">
      <a
        href={
          "https://drive.google.com/file/d/1hz0R8dlpQluVvsel6EMEnkoHUnGTHyaL/view?usp=sharing"
        }
        download
        className="btn"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        {" "}
        Contact Me
      </a>
    </div>
  );
}

export default CTA
