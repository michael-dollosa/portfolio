import "./Header.scss"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiArrowDownCircle } from "react-icons/fi";
import { BrowserRouter as Router, Link } from "react-router-dom"
const Header = () => (
  <section className="header-container-main">
    <div className="website-title">michaeldollosa</div>
    <div className="header-container">
      <img src="./header.png" alt=""/> 
      <h1>MICHAEL DOLLOSA</h1>
      <p>Hi I’m Michael Dollosa, also known as Dolee. Aspiring developer, experienced consultant.</p>
      <div className="social-icons">
      <Router>
        <Link to={{ pathname: "https://github.com/michael-dollosa"}} target={"_blank"}><FaGithub color="#FFF" size="2.5rem"/></Link>
        <Link to={{ pathname: "https://www.linkedin.com/in/michaeldollosa/"}} target={"_blank"}><FaLinkedin color="#FFF" size="2.5rem"/></Link>
      </Router>
      
      </div>
    </div>
    <div className="header-footer">
      <h3>Check my works</h3>
      <a href="#latestProjects">
        <FiArrowDownCircle color="#E85360" size="3rem" stroke-width="1px" />
      </a>
      
    </div>
  </section>
  
)

export default Header