import LANDING_NAV_SECTION from "./views/landNavSection"
import ABOUT_ME from "./views/aboutMe";
import TECH_SKILLS from "./views/techSkills";
import PROJECTS from "./views/projects";
// import CONTACT from "./views/contact";

const App = (props) => {
  return (
    <>
      <div className="appStyle">
        {/* parallax'em */}

        <LANDING_NAV_SECTION />

        <div className='parallax '></div>

        <div className='parallax aboutParallax '>
          <div className="aboutContainer">
            <ABOUT_ME />
          </div>
        </div>


        <div className='parallax'></div>

        <div className='parallax aboutParallax '>
          <div className="aboutContainer">
            <TECH_SKILLS />
          </div>
        </div>

        <div className='parallax'></div>
       
        <PROJECTS />


        {/* <div className='parallax'></div>
        <CONTACT /> */}

      </div>
    </>

  );
}

export default App;
