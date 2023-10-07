import { Link } from 'react-router-dom';

function About(){
    return(
        <>
        <p>
                <b>Hello there!</b><br/> I'm <b>Fenix T.S</b>, a passionate <u><b>Front-End Developer</b></u> from the
                scenic
                coastal town of Kanyakumari. While my academic background lies in <b>Mechanical Engineering</b>, my
                heart
                and soul are devoted to the captivating world of web development.<br/><br/>

                Throughout my journey as a Front-End Developer, I've discovered a deep fascination with the entire web
                development ecosystem. This newfound passion has inspired me to set my sights on becoming a<b><u>
                        Full-Stack
                        Web Developer</u></b> , capable of creating comprehensive and dynamic web applications from
                start to
                finish.<br/><br/>


                To achieve my goal, I'm continuously expanding my skillset, learning new programming languages, and
                exploring various development frameworks. Embracing challenges with enthusiasm, I seek opportunities to
                work
                on diverse projects that push the boundaries of my knowledge and expertise.<br/><br/>



                When I'm not coding, you can find me exploring the wonders of nature in <b>Kanyakumari</b> , drawing
                inspiration from its beauty. <b>Reading</b> remains a constant part of my life, keeping me informed
                about
                the latest trends and advancements in technology and design.<br/><br/>

                Thank you for visiting my website, and I'm thrilled to have you join me on this remarkable quest to
                become a
                Full-Stack Web Developer. If you share my passion for web development or would like to collaborate on
                projects, please feel free to connect with me. Together, let's build the future of the digital world!
                
            </p>
         <nav>
            <Link to="/">Home</Link>
          </nav>
          </>
    );
}
export default About;