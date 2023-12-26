import ProfileHome from "./views/ProfileHome";
import { Routes, Route } from "react-router-dom";
import ContactMeModal from "./components/app/contactMeModal"


const App = (props) => {
  return (
       
        <Routes>
          <Route path="/" element={ <ProfileHome />} />
          <Route path="contactMe" element={<ContactMeModal/>} />
        </Routes>
  );
}

export default App;
