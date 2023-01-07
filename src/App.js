
import './App.css';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import {PralinesPage} from "./pages/PralinesPage";
import {AboutPage} from "./pages/AboutPage";
import {HomePage} from "./pages/HomePage";
import {PralineDetails} from "./pages/PralineDetails";
import {PRALINES_DATA, VULLINGEN_DATA} from "./data";

function App(){
    return (
        <div>
            <HashRouter>

                <nav>
                    <Link to="/">
                        <img
                            src={require(`./img/logo_goud_zonder_ring_dik-removebg-preview.png`)}
                            className="logo"
                            alt="Gauthier Logo"
                        />

                    </Link>
                    <Link to="pralines" className="nav-buttons">Pralines</Link>
                    <Link to="about" className="nav-buttons">Over ons</Link>
                    <Link to="home" className="nav-buttons">Home</Link>
                </nav>

                <Routes>
                    <Route index path="/" element={<HomePage/>}/>
                    <Route index path="home" element={<HomePage/>}/>
                    <Route index path="about" element={<AboutPage/>}/>
                    <Route index path="pralines" element={<PralinesPage pralines={PRALINES_DATA}/>}/>
                    <Route index path="/details/:id" element={<PralineDetails/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
