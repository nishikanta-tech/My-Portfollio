import { BrowserRouter,Routes,Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Technology from "./Components/Technology";
import Degree from "./Components/Degree";
// import ApiConnectivity from "./Components/ApiConnectivity";

function App(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/degree" element={<Degree />} />
                {/* <Route path="/Api" element={<ApiConnectivity />} /> */}
            </Routes>
            {/* <Footer/> */}
        </BrowserRouter>
    );
}

export default App;