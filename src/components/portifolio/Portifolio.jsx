import React from 'react';
import "./Portifolio.css";
import IMG1 from "../../assets/user-img.png";
import IMG2 from "../../assets/user-img.png";
import IMG3 from "../../assets/user-img.png";
import IMG4 from "../../assets/user-img.png";
import IMG5 from "../../assets/user-img.png";
import IMG6 from "../../assets/user-img.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Tesla Presentation Website',
    github: "https://github.com/GoulartAugusto/",
    demo: "https://github.com/GoulartAugusto"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Gericht Restaurant - Home page, Menu and more',
    github: "https://github.com/GoulartAugusto/",
    demo: "https://github.com/GoulartAugusto"
  },{
    id: 3,
    image: IMG3,
    title: 'Lama Pizza - Pizza service whit orders and payment',
    github: "https://github.com/GoulartAugusto/",
    demo: "https://github.com/GoulartAugusto"
  },{
    id: 4,
    image: IMG4,
    title: 'Clubhouse - Front-end of the App',
    github: "https://github.com/GoulartAugusto/",
    demo: "https://github.com/GoulartAugusto"
  },{
    id: 5,
    image: IMG5,
    title: 'Linkedin - Homepage, authentication and postability',
    github: "https://github.com/GoulartAugusto/",
    demo: "https://github.com/GoulartAugusto"
  },{
    id: 6,
    image: IMG6,
    title: 'Tesla Presentation Website',
    github: "https://github.com/GoulartAugusto/",
    demo: "https://github.com/GoulartAugusto"
  },
]


const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>My Recent Work</h5>
      <h2>Portifolio</h2>

      <div className="container portifolio__container">
      <article className="portifolio__item">
        <div className="portifolio__item-image">
          <img src={IMG1} alt="" />
        </div>
        <h3>This is a portifolio title</h3>
        <div className="portifolio__item-cta">
          <a href="htpps://github.com/GoulartAugusto" className="btn" target="_blank">Github</a>
          <a href="htpps://github.com/GoulartAugusto" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      
      <article className="portifolio__item">
        <div className="portifolio__item-image">
          <img src={IMG1} alt="" />
        </div>
        <h3>This is a portifolio title</h3>
        <div className="portifolio__item-cta">
          <a href="htpps://github.com/GoulartAugusto" className="btn" target="_blank">Github</a>
          <a href="htpps://github.com/GoulartAugusto" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      
      <article className="portifolio__item">
        <div className="portifolio__item-image">
          <img src={IMG1} alt="" />
        </div>
        <h3>This is a portifolio title</h3>
        <div className="portifolio__item-cta">
          <a href="htpps://github.com/GoulartAugusto" className="btn" target="_blank">Github</a>
          <a href="htpps://github.com/GoulartAugusto" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      
      <article className="portifolio__item">
        <div className="portifolio__item-image">
          <img src={IMG1} alt="" />
        </div>
        <h3>This is a portifolio title</h3>
        <div className="portifolio__item-cta">
          <a href="htpps://github.com/GoulartAugusto" className="btn" target="_blank">Github</a>
          <a href="htpps://github.com/GoulartAugusto" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      
      <article className="portifolio__item">
        <div className="portifolio__item-image">
          <img src={IMG1} alt="" />
        </div>
        <h3>This is a portifolio title</h3>
        <div className="portifolio__item-cta">
          <a href="htpps://github.com/GoulartAugusto" className="btn" target="_blank">Github</a>
          <a href="htpps://github.com/GoulartAugusto" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      
      <article className="portifolio__item">
        <div className="portifolio__item-image">
          <img src={IMG1} alt="" />
        </div>
        <h3>This is a portifolio title</h3>
        <div className="portifolio__item-cta">
          <a href="htpps://github.com/GoulartAugusto" className="btn" target="_blank">Github</a>
          <a href="htpps://github.com/GoulartAugusto" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      
      </div>
    </section>
  )
}

export default Portifolio