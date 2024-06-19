import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/main/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Feedbacks from "./pages/Feedbacks/Feedbacks.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Work1 from "./pages/Portfolio work_1/Work1.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            {/*<Contacts/>*/}
            {/*<Portfolio />*/}
            {/*<Footer />*/}
            {/*<Work1 />*/}
            {/*<Blog />*/}
            {/*<Feedbacks />*/}
        </div>
    )
}

export default App
