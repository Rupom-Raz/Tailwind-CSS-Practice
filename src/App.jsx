import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Commuinty from "./components/pages/Community";
import Carrers from "./components/pages/Careers";
import Product from "./components/pages/Product";
import Pricing from "./components/pages/Pricing";

const App = () => {
    return (
        <>
            <Router forceRefresh>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route path="/pricing" component={Pricing} />
                <Route path="/careers" component={Carrers} />
                <Route path="/community" component={Commuinty} />
                <Route path="/about" component={AboutUs} />
                <Route path="/product" component={Product} />
            </Router>
        </>
    );
};

export default App;
