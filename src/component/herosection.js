import {Link} from "react-scroll";
export default function HeroSection(){
    return(
        <section id ="heroSection" className="hero--section bg">
            <div className="hero--section--content--box">
                <div className="hero--section--content hero--bg--intro">
                    <p className="section--title ">Hey, Dr.Apoorv Sharma</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title-color">Endodontist</span>{" "}
                        <br />
                        & Esthetic Dentist
                    </h1>
                    <p className="hero--section--description">
                        
                        <br />
                    </p>
                </div>
               
                <Link       
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Contact" // *******************************************Change this according to the function made later
                        className="btn-primary btn">Get In Touch</Link>
              
            </div>
            <div className="hero--section--img">
                {/* <img src='../imgs/Profile.png' alt="This is Profile" width={"400px"}></img> */}
            </div>
        </section>
    )
}