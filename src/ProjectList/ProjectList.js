import "./ProjectList.scss"
import ProjectItem from "../ProjectItem/ProjectItem.js"
import { BrowserRouter as Router } from "react-router-dom";
import data from "../data"

const ProjectList = () => {
  const itemList = data.map((item, index) => {
    const { imgSrc, title, gitHubLink, websiteLink, desc }= item
    return(
      <ProjectItem
        key={ index }
        imgSrc={ imgSrc }
        title={ title }
        gitHubLink={ gitHubLink }
        websiteLink={ websiteLink }
        desc={ desc }
      />
    )
  })
  return(
    <div className="list-container">
      <Router>
        { itemList }
      </Router>
    </div>
  )
}

export default ProjectList