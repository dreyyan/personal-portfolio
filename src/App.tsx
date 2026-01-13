import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Projects from "./Projects";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/projects" element={<Projects />} />
            </Route>
        </Routes>
    );
};

export default App;