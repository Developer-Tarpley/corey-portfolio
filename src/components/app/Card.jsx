
import { RiGithubLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { RiNumber0, RiNumber1, RiNumber2, RiNumber3, RiNumber5, RiNumber7, RiNumber8 } from "react-icons/ri";
import { GoDash } from "react-icons/go";
import { LiaLessThanSolid, LiaGreaterThanSolid } from "react-icons/lia";
import { SiGmail } from "react-icons/si";
import { GiRotaryPhone } from "react-icons/gi";

import { NavLink } from "react-router-dom";


const Best_Contact = () => {
    return (
        <div className="contactCard">
            <div className="contactDiv" >
                <div className="round-logo-phone">
                    <GiRotaryPhone className="image-logo-phone" />
                </div>
                <RiNumber1 className="contactNumber" />
                <LiaLessThanSolid className="contactNumber" /><RiNumber5 className="contactNumber" /><RiNumber2 className="contactNumber" /><RiNumber0 className="contactNumber" /><LiaGreaterThanSolid className="contactNumber" /><RiNumber2 className="contactNumber" /><RiNumber7 className="contactNumber" /><RiNumber3 className="contactNumber" />
                <GoDash className="contactNumber" />
                <RiNumber1 className="contactNumber" /><RiNumber8 className="contactNumber" /><RiNumber7 className="contactNumber" /><RiNumber5 className="contactNumber" />
            </div>

            <div className="socialLink" >
                <div>
                    <NavLink to="/contactMe" className="emailLink" >
                        <div className="round-logo">
                            <SiGmail className="image-logo" />
                        </div>
                    </NavLink>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/corey-tarpley-592b4129b/" className="linkedinLink" >
                        <div className='round-logo' >
                            <SlSocialLinkedin className='image-logo' />
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Developer-Tarpley/" className="githubLink" >
                        <div className='round-logo' >
                            <RiGithubLine className="image-logo" />
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Best_Contact