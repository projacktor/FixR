import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/main/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Feedbacks from "./pages/Feedbacks/Feedbacks.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Work1 from "./pages/Portfolio work_1/Work1.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import About from "./pages/About/About.jsx";
import Footer from "./components/main/Footer/Footer.jsx";
import Services from "./pages/Services/Services.jsx";
import Post1 from "./pages/Blog page_1/Post1.jsx";
import Gratitude from "./pages/Gratitude/Gratitude.jsx";
import PageNotFound from "./pages/404/PageNotFound.jsx";

// TODO: change photo on About page

function App() {
    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/portfolio/work1" element={<Work1/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/blog/post1" element={<Post1/>}/>
                    <Route path="/feedbacks" element={<Feedbacks/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/gratitude" element={<Gratitude/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

export default App
