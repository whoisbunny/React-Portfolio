import React from 'react'
import './portfolio.css'
import WORDO from '../../assets/wordo.png'
import ReactPortfolio from '../../assets/React_portfolio.png'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: WORDO,
    title: "Wordo - Text editing webapp",
    github: "https://github.com/whoisbunny/wordo.git",
    demo: "https://whoisbunnywordo.netlify.app",
  },
  {
    id: 2,
    image: ReactPortfolio,
    title: "React Portfolio - WebApp",
    github: "https://github.com/whoisbunny/React-Portfolio.git",
    demo: "https://whoisbunny.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Project-3",
    github: "https://github.com",
    demo: "https://github.com",
  },
];
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({id,title,image,github , demo})=>{
          return(
            <>
            <article className="portfolio__item" key={id}>
          <div className="portfolio__item-image">
          <img src={image} alt="" />
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              
            <a href={github} className='btn' target='_blank' rel='noreferrer'> Github</a>
            <a href={demo} className='btn btn-primary'  target='_blank' rel='noreferrer'> Live Demo</a>
            </div>
        </article>
            
            </>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
