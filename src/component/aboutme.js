
export default function AboutMe(){
    return(
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
            
            <img src='../imgs/about-me.png' alt="This is Profile" width={"300px"}></img>
            </div>
            <div className="hero--section--content--box
            about--section--box">
                <div className="hero--section--content">
                    {/* <p className="section--title">About</p> */}
                    <h1 className="skills--section--heading">Dr.Apoorv Sharma</h1>
                    <p className="hero--section--description">
                    Hello and welcome to my corner of dental expertise! I'm Dr. Apoorv Sharma, a seasoned dentist with over 7 years of experience dedicated to providing top-notch dental care.
                    </p>
                    <p className="hero--section--description">
                     Having successfully completed more than 8500 cases, I take pride in delivering quality treatments that prioritize the well-being and satisfaction of my patients.
                    </p>
                    <p className="hero--section--description">
                    Currently practicing as consultant endodontist in Chandigarh and Roorkee(Uttarakhand)
                    </p>
                </div>
            </div>
            
        </section>
    )
}