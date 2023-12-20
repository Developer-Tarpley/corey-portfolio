import BEST_CONTACT from "./Card"
import profilePic from "../../stylesheets/img/profile-pic2.png"

const Land_Nav_Section = ()=>{
    return (
        <section className="landNavSectionContainer">
          
            <section className="imgSection">
                <img className="profileimg" src={profilePic} alt="" />
              {/* <div className="bestContactInfoSection"> */}
                <BEST_CONTACT/>
            {/* </div> */}
            </section>
            <nav className="mainNav">
                <ul>
                    <a href="/about" ><li className="landNavLi" >ABOUT</li></a>
                    <a href="/skills" ><li className="landNavLi" >TECH SKILLS</li></a>
                    <a href="/projects" ><li className="landNavLi" >PROJECTS</li></a>
                    <a href="/contact" ><li className="landNavLi" >CONTACT</li></a>
                </ul>
            </nav>
        </section>
    )
}

export default Land_Nav_Section