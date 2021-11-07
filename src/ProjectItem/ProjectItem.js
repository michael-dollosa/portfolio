import "./ProjectItem.scss"
import { useEffect } from "react"
import { FaGithub, FaLink } from 'react-icons/fa'
import { Link } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"
const ProjectItem = ({ imgSrc, title, gitHubLink, websiteLink, desc }) => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return(
    <section className="item-container-main" data-aos="fade-up">
      <div className="item-container">
        <Link to={{ pathname: websiteLink}} target={"_blank"}>
          <img 
          src={imgSrc} 
          alt=""
          />
          
        </Link>
        <h3>{ title }</h3>
        <div className="social-icons">
          <Link to={{ pathname: gitHubLink}} target={"_blank"}><FaGithub color="#303030"/></Link>
          <Link to={{ pathname: websiteLink}} target={"_blank"}><FaLink color="#303030"/></Link>
        </div>
        <p>{ desc }</p>
        
      </div>
    </section>
    
  )
}

export default ProjectItem