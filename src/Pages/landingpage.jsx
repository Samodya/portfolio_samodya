import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import useScreenSize from "../hooks/ismobile";
import { MainNavigation } from "../Components/navigation/mainnavigation";
import { MobileNavigation } from "../Components/navigation/mobilenavigation";
import HeroSection from "../Components/herosection/hero";
import { Aboutme } from "./aboutme";
import { Contact } from "./contact";
import { ServicesPage } from "./services";

import { Projects } from "./projects";
import SlidingMenu from "../Components/navigation/sidebarMenu";

export const LandingPage = () => {

    const { isMobile, width } = useScreenSize();

  return(
        <>
            {isMobile ? <SlidingMenu/>:<MainNavigation/>}
           <HeroSection/>
           <Aboutme/>
           <ServicesPage/>
           <Projects/>
           <Contact/>
        </>
    );
};
