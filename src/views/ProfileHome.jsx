import LANDING_NAV_SECTION from "./landNavSection"
import ABOUT_ME from "./aboutMe";
import TECH_SKILLS from "./techSkills";
import PROJECTS from "./projects";




const ProfileHome = () => {

    return (
      <div className="appStyle">
        {/* parallax'em */}

        <LANDING_NAV_SECTION />

        <div className='parallax '></div>

        <div className='parallax aboutParallax '>
          <div id="about" className="aboutContainer">
            <ABOUT_ME />
          </div>
        </div>


        <div className='parallax'></div>

        <div className='parallax aboutParallax '>
          <div id="skills" className="aboutContainer">
            <TECH_SKILLS />
          </div>
        </div>

        <div id="projects" className='parallax'></div>

        <PROJECTS />

        {/* <div className='parallax'></div>
    <CONTACT /> */}

      </div>
    )


}

export default ProfileHome