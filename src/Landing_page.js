
import { useEffect, useLayoutEffect, useRef } from "react";
import "./Landing_Page.css"
import Navbar from "./Navbar";
import IntroPic from "./intro-pic.png"
import { VscFolderLibrary } from "react-icons/vsc";
import { GrTestDesktop } from "react-icons/gr";
import { BsBarChartSteps , BsFillBarChartLineFill } from "react-icons/bs";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BiSolidReport } from "react-icons/bi";
import { IoAnalytics } from "react-icons/io5";
import Footer from "./Footer";
import HairdryerFrames from "./HairdryerFrames";

const Landing_Page = () =>{

  const htmlRef = useRef(null);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const fixRef = useRef(null);
  const afterAnimRef = useRef(null);
  const frameCount = 89;

  const currentFrame = (index) => (
    HairdryerFrames[index]
  );

  const preloadImages = () => {
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      contextRef.current = context;
  
      canvas.width = 1450;
      canvas.height = 1100;
  
      const img = new Image();
      img.onload = () => {
        context.drawImage(img, 0, 0);
      };
  
      img.src = currentFrame(1);
    }, []);

    useEffect(() => {
      const handleScroll = () => {

        const fixpos = fixRef.current.getBoundingClientRect().top;
        const frame = Math.min(Math.ceil((window.scrollY - fixpos)/ (htmlRef.current.scrollHeight - window.innerHeight) *146));

        console.log("|frame| " + frame + "| wind|" + window.scrollY)
        
        if(frame > 0 && frame <= frameCount){
          console.log('present')
        }
        else{
          return
        }

        const img = new Image();
        img.onload = () => {
          contextRef.current.drawImage(img, 0, 0);
        };

  
        img.src = currentFrame(frame);
      };
  
      htmlRef.current.addEventListener('scroll', handleScroll);
      preloadImages();


        window.addEventListener('scroll' , handleScroll)
      }, []);

      useLayoutEffect(()=>{

        const fixpos = fixRef.current.getBoundingClientRect().top;
        const movepos = afterAnimRef.current.getBoundingClientRect().top;

        console.log("== " + fixpos)
      const onScroll = () => {
      if (fixpos < window.scrollY )  {
        console.log("ok");
        canvasRef.current.style.position = "fixed";
        canvasRef.current.id = "canvas";
        fixRef.current.style.top = 0;
        fixRef.current.style.left = 0;
      } else {
        canvasRef.current.style.position = "relative";
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


    return(
        <div id="lp" className="landing-page">
            <Navbar/>
            <div ref={htmlRef} className="landing-page-body">

            <div className="header-space"></div>
              
             <div className="intro">
                  <div className="intro-content">
                    <div className="intro-head">Unleash the Power of AI based Experimentation in Product Decisions</div>
                    <div className="intro-content-body">
                      <div className="icb">Revolutionize product development through Testrunz, AI-powered experimentation platform</div>
                      <div className="icb">Accelerate every phase of product development with Twinmo's innovative all-in-one solution, Testrunz</div>
                      <div className="icb">Experience the future of product development and testing with Testrunz by Twinmo</div>
                    </div>
                  </div>
                  <div className="intro-body">
                    <img src={IntroPic} alt="product development and testing" className="intro-pic"/>
                  </div>
            </div> 

            <div className="unified-platform" ref={fixRef}>
                <canvas id = "canvas" ref={canvasRef} ></canvas>
            </div>
            <div className="after-scroll-animate" ref={afterAnimRef}>
              <div className="post-section">
                  <div className="content">
                    <div className="content-pic rapid-pic"></div>
                    <div className="content-head">The Power of Rapid Experimentation</div>
                    <div className="content-body">Transform the way you discover, test, and learn, without ever beating around the bush</div>
                  </div>
                  <div className="content">
                    <div className="content-pic integrated-pic"></div>
                    <div className="content-head">Vertically Integrated Solution</div>
                    <div className="content-body">Integrated hardware and software solution enhance your productivity</div>
                  </div>
                </div>
                <div className="post-section">
                  <div className="subhead">
                    <div className="subhead-text">FEATURES</div>
                    <div className="dash"></div>
                  </div>
                </div>
                <div className="post-section">
                  <div className="feature">
                      <div className="feature-icon">
                        <VscFolderLibrary className="ft-icon"/>
                      </div>
                      <div className="feature-text">Predefined test procedure library</div>
                      <div className="feature-explain">Unleash efficiency with our expensive, predefined procedure library, tailored for a seemless testing experience</div>
                  </div>
                  <div className="feature">
                      <div className="feature-icon">
                          <GrTestDesktop className="ft-icon"/>
                      </div>
                      <div className="feature-text">Comprehensive test input and inventory management</div>
                      <div className="feature-explain">Optimize your workflows with our holistic test input and inventory management system</div>
                  </div>
                  <div className="feature">
                      <div className="feature-icon">
                          <BsBarChartSteps className = "ft-icon"/>
                      </div>
                      <div className="feature-text">Step-by-step digital work instructions</div>
                      <div className="feature-explain">Navigate your experiments with ease, courtesy of our detailed digital work instructions</div>
                  </div>
                  <div className="feature">
                      <div className="feature-icon">
                          <MdOutlineIntegrationInstructions className="ft-icon"/>
                      </div>
                      <div className="feature-text">Integrated test instruments for time-efficient data collection</div>
                      <div className="feature-explain">Simplify data collection with our integrated testing instruments, designed for speedy and accurate results</div>
                  </div>
                </div>
                <div className="post-section">
                  <div className="feature">
                      <div className="feature-icon">
                         <BsFillBarChartLineFill className="ft-icon"/>
                      </div>
                      <div className="feature-text">Interactive charts for real-time test progress tracking</div>
                      <div className="feature-explain">Track your tests' progress in real-time with our interactive and dynamic charts</div>
                  </div>
                  <div className="feature">
                      <div className="feature-icon">
                         <GiArtificialIntelligence className="ft-icon"/>
                      </div>
                      <div className="feature-text">Advanced AI engine for automatic calculations and results analysis</div>
                      <div className="feature-explain">Leave the heavy lifting to our advanced AI engine, taking care of calculations and providing insightful results analysis</div>
                  </div>
                  <div className="feature">
                      <div className="feature-icon">
                          <BiSolidReport className="ft-icon"/>
                      </div>
                      <div className="feature-text">Simplified test report generation</div>
                      <div className="feature-explain">Easily generate comprehensive test reports with our streamlined reporting tool</div>
                  </div>
                  <div className="feature">
                      <div className="feature-icon">
                          <IoAnalytics className="ft-icon"/>
                      </div>
                      <div className="feature-text">Advanced analytics for further data analysis</div>
                      <div className="feature-explain">Dive deep into your data with our advanced analytics capabilities, for insightful and detailed data examination</div>
                  </div>
                  </div>
            <Footer/>

                </div>
            </div>
        </div>
    )
}

export default Landing_Page;