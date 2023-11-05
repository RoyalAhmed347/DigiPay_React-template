import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Componunt/NavBar";
// import Home from "./Componunt/pages/Home";
import About from "./Componunt/pages/About";
import Content from "./Componunt/pages/Home";
// import Footer from "./Componunt/Footer";
import Contact from "./Componunt/pages/Contact";
import Service from "./Componunt/pages/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />

          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
