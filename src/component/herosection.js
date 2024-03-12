import {Link} from "react-scroll";
import { IoCall } from "react-icons/io5";
export default function HeroSection(){
    return(
        <section id ="heroSection" className="hero--section bg">
            <div className="hero--section--content--box">
                <div className="hero--section--content hero--bg--intro">
                    {/* <p className="section--title ">Hey, Dr.Apoorv Sharma</p> */}
                    <h1 className="hero--section--title">
                        <span className="hero--section-title-color">Call us and book your appointment now </span>{" "}
                        <br />
                        <IoCall />
 098979 78150 
                        
                    </h1>
                    <p className="section--title "></p>
                    <p className="hero--section--description">
                        
                        <br />
                    </p>
                <Link       
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Contact" // *******************************************Change this according to the function made later
                        className="btn-primary btn">Get In Touch</Link>
                </div>
               
              
            </div>
            <div className="hero--section--content--box1">
                <div className="hero--section--content hero--bg--intro">
                    {/* <p className="section--title ">Hey, Dr.Apoorv Sharma</p> */}
                    
                        <span className="hero--section-title-color">Call us and book your appointment now </span>{" "}
                        <br />
                        <IoCall />
 098979 78150 
                        
                
                    <p className="section--title "></p>
                    <p className="hero--section--description">
                        
                        <br />
                    </p>
                <Link       
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Contact" // *******************************************Change this according to the function made later
                        className="btn-primary btn">Get In Touch</Link>
                </div>
               
              
            </div>
            <div className="hero--section--img">
                {/* <img src='../imgs/Profile.png' alt="This is Profile" width={"400px"}></img> */}
            </div>
        </section>
    )
}