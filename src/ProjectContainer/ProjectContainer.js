import { FaRegMap } from 'react-icons/fa'
import ProjectList from '../ProjectList/ProjectList'
import './ProjectContainer.scss'

const ProjectContainer = () => {
  return(
    <>
    <div id="latestProjects"></div>
    <section className="project_container-main">
    
      <h1>My Latest Projects</h1>
      <ProjectList />
    </section>
    </>
  )
}

export default ProjectContainer