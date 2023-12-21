import { IoLogoJavascript } from "react-icons/io";
import { TiHtml5 } from "react-icons/ti";
import { TbFileTypeCss } from "react-icons/tb";
import { SiCreatereactapp } from "react-icons/si";
import { MdTroubleshoot } from "react-icons/md";
import { VscDebugConsole } from "react-icons/vsc";
import { BsFillTerminalFill } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { BsUbuntu } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";

const Tech_Skills = () => {

    return (
        <section className="skills landingSections">
            <h2>SKILLS</h2>
            <hr/>
            <div className="skillsGrid">
                <div className="frontend">

                    <div><IoLogoJavascript className="sklLogo" /> </div>
                    <div><TiHtml5 className="sklLogo" /></div>
                    <div><TbFileTypeCss className="sklLogo" /></div>
                    <div><SiCreatereactapp className="sklLogo" /></div>
                    <div><MdTroubleshoot className="sklLogo" /></div>
                    <div><VscDebugConsole className="sklLogo" /></div>
                    <div><TbApi className="sklLogo" /></div>

                </div>

                <div className="backend">

                    <div><BsFillTerminalFill className="sklLogo" /></div>
                    <div><BiLogoMongodb className="sklLogo" /></div>
                    <div><TbApi className="sklLogo" /></div>
                    <div><FaNode className="sklLogo" /></div>
                    <div><SiExpress className="sklLogo" /></div>

                </div>

                <div className="otherSkills">

                    <div><VscGithub className="sklLogo" /></div>
                    <div><BsUbuntu className="sklLogo" /></div>
                    <div><FaWindows className="sklLogo" /></div>
                
                </div>

            </div>
        </section>
    )
}

export default Tech_Skills