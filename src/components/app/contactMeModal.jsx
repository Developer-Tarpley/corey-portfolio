import Form from "../block/form"
import CFormInputs from "../block/CFormInputs"
import { NavLink } from "react-router-dom"

const contactMeModal = () => {
  return (
    <div className="modContainer" >
      <NavLink to={"/"} >GO BACK</NavLink>

      <div className="contactFormDiv">
        <Form className="contactForm" btnText="SEND" >
          <CFormInputs
            name="name"
            type="text"
            required={true}
            placeholder="Name goes here"
          />
          <CFormInputs
            name="email"
            type="email"
            required={true}
            placeholder="email goes here"
          />
          <CFormInputs
            name="subject"
            type="text"
            required={true}
            placeholder="subject goes here"
          />
          <textarea
            name="message"
            type="text"
            required={true}
            placeholder="Type Message Here"
          />

        </Form>
      </div>
    </div>
  )
}

export default contactMeModal