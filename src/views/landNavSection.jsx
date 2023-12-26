// import { Link } from "react-router-dom"
import BEST_CONTACT from "../components/app/Card"
import profilePic from "../stylesheets/img/profile-pic3.png"

const Landing_Nav_Section = (props) => {
    

    return (
        <div className="landNavSectionContainer">
           
            <div className="container">
                <section className="imgSection l-sect">
                    <img className="profileimg" src={profilePic} alt="" />
                </section>
                <section className="nav-sect">
                    <nav className="mainNav">
                        <ul>
                            <a href="#about" ><li className="landNavLi" >ABOUT</li></a>
                            <a href="#skills" ><li className="landNavLi" >TECH SKILLS</li></a>
                            <a href="#projects" ><li className="landNavLi" >PROJECTS</li></a>
                        </ul>
                    </nav>
                </section>

            </div>
            <section className="r-sect">
                <div className="landingHeader">
                    <span className="name">Corey Tarpley</span>
                    <span className="title">An Amazing Web Developer</span>
                    <BEST_CONTACT />
                </div>
            </section>
        </div>
    )
}

export default Landing_Nav_Section
