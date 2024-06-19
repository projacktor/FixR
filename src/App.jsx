import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/main/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Feedbacks from "./pages/Feedbacks/Feedbacks.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Work1 from "./pages/Portfolio work_1/Work1.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path={"" || "/"} element={<Home />}/>
                    <Route path="/contacts" element={<Contacts />}/>
                    <Route path="/portfolio" element={<Portfolio />}/>
                    <Route path="/portfolio/work1" element={<Work1 />}/>
                    <Route path="/blog" element={<Blog />}/>
                    <Route path="/feedbacks" element={<Feedbacks/>}/>
                </Routes>
            </BrowserRouter>
            {/*<Home />*/}
            {/*<Contacts/>*/}
            {/*<Portfolio />*/}
            {/*<Work1 />*/}
            {/*<Blog />*/}
            {/*<Feedbacks />*/}
        </div>
    )
}

export default App
