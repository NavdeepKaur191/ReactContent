import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import { Routes, Route, Link} from "react-router-dom"

function NavBar(){
    return(
      <div>
        <nav className="nav">
          <Link to="/" >Homepage</Link> 
          <Link to="/about-me">About Me</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={ <Homepage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />}/>
        </Routes>        
      </div>
    )
};
export default NavBar;