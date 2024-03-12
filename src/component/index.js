import AboutMe from "./aboutme";
import HeroSection from "./herosection";
import MySkills from "./skills"
import MyPortfolio from "./myportfolio";
import ContactMe from "./contactme";
import Footer from "./footer";
export default function Home(){
    return(
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            {/* <MyPortfolio /> */}
            <ContactMe />
            <Footer />
        </>
    )
}