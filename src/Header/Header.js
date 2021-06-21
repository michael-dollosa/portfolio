import "./Header.scss"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BrowserRouter as Router, Link } from "react-router-dom"
const Header = () => (
  <div className="header-container">
      <img src="./header.png" alt=""/> 
      <h1>Dolee</h1>
      <p>Hi I’m Michael Dollosa, aka Dolee by friends. Aspiring developer. Check out my works!</p>
      <div className="social-icons">
      <Router>
        <Link to={{ pathname: "https://github.com/michael-dollosa"}} target={"_blank"}><FaGithub color="#303030"/></Link>
        <Link to={{ pathname: "https://www.linkedin.com/in/michaeldollosa/"}} target={"_blank"}><FaLinkedin color="#303030"/></Link>
      </Router>
      
      </div>
  </div>
)

export default Header