import React from "react";

import { About, Footer, Header, Skills, Work, Education } from "./container";

import "./App.scss";
import { Navbar } from "./components";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <Education />
    <About />
    <Work />
    <Skills />
    <Footer />
  </div>
);

export default App;
