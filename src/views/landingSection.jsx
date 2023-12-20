import LAND_NAV_SECTION from "../components/app/landNavSection"

const Landing_Section = () => {
/**
  My title and my contact is un-even 
  possible fix: to bring down header and contact into same div
 */

    return (
        <div className="landingSection">
            <div className="landingHeader">
                <span className="name">Corey Tarpley</span>
                <span className="title">An Amazing Web Developer</span>
            </div> 
            <LAND_NAV_SECTION/>

        </div>
    )
}

export default Landing_Section