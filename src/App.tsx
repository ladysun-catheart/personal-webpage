import React from "react";
import "./App.scss";
import { Header, Footer } from "./components";
import { About, Tech, Experience, Works, Contact } from "./sections";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main  className="main">
        <About />
        <Tech />
        <Experience />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
