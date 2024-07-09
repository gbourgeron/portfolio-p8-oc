import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../Layout";
import ScrollToTop from "../ScrollToTop";

import Contact from "../../pages/Contact";
import Error from "../../pages/Error";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Skills from "../../pages/Skills";

function AppRouter() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route
                        path='/' 
                        element={<Home />} />
                    <Route
                        path='/contact' 
                        element={<Contact />} />
                    <Route
                        path='/skills' 
                        element={<Skills />} />
                    <Route
                        path='/projects' 
                        element={<Projects />} />
                    <Route
                        path='/*' 
                        element={<Error />} />

                </Routes>
            </Layout>
        </Router>
    )
}

export default AppRouter;