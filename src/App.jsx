import Header from "./headFooter/header";
import PageOne from "./pageOne/PageOne";
import Product from "./portfolio/product";
import Skills from "./skills/SkillsSection";
import "./App.css";
import Contact from "./contact/contact";

function App() {
  
  return (
    <>
     <div>
      <Header/>
      <PageOne/>
      <Skills/>
      <Product/>
      <Contact/>
      
    </div>
      
    </>
  );
}

export default App;
