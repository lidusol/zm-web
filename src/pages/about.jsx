import React from "react";
import Navbar from "../components/Navbar/navbar";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import HeaderWithImage from "../components/Header-with-img";
import AboutIntro from "../components/About-intro";
import DarkTheme from "../layouts/Dark";
import Team from "../components/Team/team";
import AboutList from "../components/About-list/about-list";

const About = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} from="about-dark" />
      <HeaderWithImage
        heading="Our dedicated board members are always striving to find new
                ideas to invest on."
        img="/img/header/about.jpg"
      />
      <AboutIntro />
      <Team />
      <AboutList />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default About;
