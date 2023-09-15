import React from "react";
import  ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import Home from "./pages/home/home";
import Searchpage from "./pages/searchpage/searchpage";
import Productpage from "./pages/productpage/productpage";

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/searchpage" element={<Searchpage/>}/>
                <Route path="/productpage" element={<Productpage/>}/>
            </Routes>
        </HashRouter>
    </React.StrictMode>
)
