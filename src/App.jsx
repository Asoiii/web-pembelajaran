import {Routes , Route} from "react-router-dom";


import NavbarComponent from "./components/NavbarComponent";

import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimoniPage from "./pages/TestimoniPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import faqPage from "./pages/faqPage";



function App() {
  return (
  <div>
    <NavbarComponent />
    
    <Routes>
      <Route path="/" Component={HomePage}  />
      <Route path="/kelas" Component={KelasPage} />
      <Route path="/testimonial" Component={TestimoniPage}  />
      <Route path="/faq" Component={faqPage}  />
      <Route path="/syaratketen" Component={SyaratKetenPage}  />
    </Routes>
  
    <FooterComponent/>
  </div>
  )
}

export default App

