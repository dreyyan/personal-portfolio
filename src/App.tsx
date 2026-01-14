import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Projects from "./Projects";

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/projects" element={<Projects />} />
            </Route>
        </Routes>
    );
};

export default App;