import React from "react";
import "./App.scss";
import { Header, Footer } from "./components";
import { About, Tech, Experience } from "./sections";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Tech />
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default App;
