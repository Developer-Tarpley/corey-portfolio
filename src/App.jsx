import ProfileHome from "./views/ProfileHome";
import { Routes, Route } from "react-router-dom";
// import ContactMeModal from "./components/app/contactMeModal"
import Contact from "./components/app/contactMeModal";


const App = (props) => {
  return (
       
        <Routes>
          <Route path="/" element={ <ProfileHome />} />
          <Route path="contactMe" element={<Contact/>} />
        </Routes>
  );
}

export default App;
