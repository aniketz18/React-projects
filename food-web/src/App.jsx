import React from "react";
import Home from "./pages/Home";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <Home />
    </SearchProvider>
   /*  <Home/> */
  );
}

export default App;
