import React from 'react'
import Resume from "https://drive.google.com/file/d/1O_eCCp25ZB4SM3Wi827fln78o4vsK7ly/view?usp=drive_link";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
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
