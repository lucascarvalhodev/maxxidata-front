import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalProvider from "./contexts/GlobalProvider";
import Routes from "./routes/routes";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </Router>
  );
};

export default App;
