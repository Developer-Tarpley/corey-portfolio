import LANDING_NAV_SECTION from "./views/landNavSection"
import ABOUT_ME from "./views/aboutMe";
import TECH_SKILLS from "./views/techSkills";
import PROJECTS from "./views/projects";
import CONTACT from "./views/contact";

const App = (props) => {
  return (
    <>
      <div className="appStyle">
        {/* parallax'em */}

        <LANDING_NAV_SECTION />

        <div className='parallax '></div>
        <ABOUT_ME />

        <div className='parallax'></div>
        <TECH_SKILLS />

        <div className='parallax'></div>
        <PROJECTS />

        <div className='parallax'></div>
        <CONTACT />

      </div>
    </>

  );
}

export default App;
