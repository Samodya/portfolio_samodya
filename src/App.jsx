import { useState } from "react";
import "./App.css";
import useScreenSize from "./hooks/ismobile";
import { MainNavigation } from "./Components/navigation/mainnavigation";
import { LandingPage } from "./Pages/landingpage";

function App() {
  const { isMobile, width } = useScreenSize();
  return (
    <>
      <div>
        <LandingPage/>
      </div>
    </>
  );
}

export default App;
