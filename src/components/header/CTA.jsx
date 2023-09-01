import React from 'react'


const CTA = () => {
  return (
    <div className="cta">
      <a
        href={
          "https://drive.google.com/file/d/1XDyga7UP2XXei4ICcI_-E6SO_5ZMbb65/view?usp=sharing"
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
