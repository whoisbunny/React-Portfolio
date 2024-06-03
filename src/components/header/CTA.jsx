import React from 'react'


const CTA = () => {
  return (
    <div className="cta">
      <a
        href={
          "https://drive.google.com/file/d/1iW5mnfHy8Y7ZBU-wJFbEarTV5Qi2poB3/view?usp=drive_link"
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
