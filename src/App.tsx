import React from "react";
import "./App.css";
import Header from "./components/header";
import Box from "./components/box";
import Footer from "./components/footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Box title="About">
          LoremNulla dolore quis cupidatat dolor Lorem nisi labore cillum
          laborum Lorem nostrud irure ea. Consectetur occaecat consectetur
          aliqua laborum velit non ipsum sint. Lorem exercitation excepteur
          irure consequat est amet.
        </Box>
        <Box title="Tech">
          LoremNulla dolore quis cupidatat dolor Lorem nisi labore cillum
          laborum Lorem nostrud irure ea. Consectetur occaecat consectetur
          aliqua laborum velit non ipsum sint. Lorem exercitation excepteur
          irure consequat est amet.
        </Box>
        <Box title="Experience">
          LoremNulla dolore quis cupidatat dolor Lorem nisi labore cillum
          laborum Lorem nostrud irure ea. Consectetur occaecat consectetur
          aliqua laborum velit non ipsum sint. Lorem exercitation excepteur
          irure consequat est amet.
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default App;
