import "./ProjectItem.scss"
import { FaGithub, FaLink } from 'react-icons/fa'
import { Link } from "react-router-dom"

const ProjectItem = ({ imgSrc, title, gitHubLink, websiteLink, desc }) => {
 
  return(
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
  )
}

export default ProjectItem