import "./App.scss"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import ProjectList from "./ProjecList/ProjectList"

const App = () => {
  return(
    <div className="app-container">
      <Header />
      <ProjectList />
      <Footer />
    </div>
  )
}

// 1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
// 2. Delete node_modules in your project folder.
// 3. Remove "webpack" from dependencies and/or devDependencies in the package.json file in your project folder.
// 4. Run npm install or yarn, depending on the package manager you use.

export default App