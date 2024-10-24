import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Logo from "./images/logoYOTIf.png";
import involve from "./images/involve.png";
import React, { useRef, useState, useEffect } from "react";
import TrashV from "./images/TrashV.png";
import PartyV from "./images/PartyV.png";
import FishV from "./images/FishV.png";
import Bar from "./images/bar.png";
import discord from "./images/discord.png";
import css from "./images/css.png";
import involveVideo from "./images/lesson.mp4";
import { Link } from 'react-router-dom';

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

const headingVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1, // Staggering the children elements
      delayChildren: 0.1, // Delay before children start animating
    },
  },
};
const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3",
  "https://via.placeholder.com/300x200?text=Image+4",
];

export default function Mentor() {
  const boxContainerRef = useRef(null);
  const [open, setOpen] = useState(false);

  const scrollLeft = () => {
    if (boxContainerRef.current) {
      boxContainerRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
    }
  };

  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.1 }, // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const scrollRight = () => {
    if (boxContainerRef.current) {
      boxContainerRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const text = " GROW YOUR TECH KNOWLEDGE MORE WITH MENTORSHIP";

  return (
    <Axis>
      <Wrapper>
        <Spline
          className="spline"
          scene="https://prod.spline.design/ixgBvco61ZSk0cGo/scene.splinecode"
        />
        <Content>
          <Image
            src={Bar}
            alt="Logo"
            onClick={toggleMenu}
            style={{ position: "absolute", top: "-40px", left: "20px" }} // Adjust positioning as needed
          />
          <Menu open={open}>
            <Image
              src={Bar}
              alt="Logo"
              onClick={toggleMenu}
              style={{ position: "absolute", top: "0px", left: "0px" }} // Adjust positioning as needed
            />
            <Image2
              src={Logo}
              alt="Logo"
              onClick={toggleMenu}
              // Adjust positioning as needed
            />
           <Link to="/" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Home</Link>
    <Link to="/about" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>About</Link>
    <Link to="/blog" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Blog</Link>
    <Link to="/contact" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Contact</Link>
    <Link to="/clients" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Clients</Link>
    <Link to="/involve" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Involve</Link>
    <Link to="/mentor" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Mentor</Link>

          </Menu>

          <h1
            style={{ marginBottom: "10px", fontSize: "clamp(3rem, 5vw, 5rem)" }}
          >
            Mentorship
          </h1>
          <p>
            Our mentorship program at YOTI (Youth Opportunities in Tech
            Innovation) is designed to empower young tech enthusiasts by pairing
            them with experienced professionals who offer guidance, support, and
            hands-on experience in various areas of technology. Through this
            program, mentees gain valuable insights and practical skills,
            enabling them to excel in the technology sector and drive positive
            change in their communities. By fostering these mentor-mentee
            relationships, we aim to nurture the next generation of innovators
            and bridge the digital divide.
          </p>
          <button>
            <img
              src={involve}
              alt="involve"
              style={{ width: "30px", height: "30px" }}
            />
            <a
              style={{
                color: "white",
                textDecoration: "none",
              }}
              href="/involve"
            >
              Get Involved
            </a>
          </button>
          <motion.divNEW
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{
              height: "100%",
              background: "white",
              display: "flex",
              alignItems: "left",
              justifyContent: "center",
              flexDirection: "column",
              color: "#61999c",
              textAlign: "left",
              padding: "20px", // Add padding to the container
              boxSizing: "border-box",
            }}
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={headingVariants}
              style={{
                fontFamily: "'Spline Sans', sans-serif",
                fontSize: "clamp(30px, 5vw, 36px)",
                margin: "0", // Reset margin
                marginRight: "300px",
                // Add padding to create space below
                zIndex: 101,
              }}
            >
              {text.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3.5 }} // Adjust duration as needed, for example, 1.5 seconds
              style={{
                fontFamily: "'Spline Sans', sans-serif",
                fontSize: "20px",
                color: "#555",
                maxWidth: "100%",

                marginBottom: "0px",
                marginRight: "300px",
                margin: "20px 0", // Add margin for spacing
              }}
            >
              At YOTI (Youth Opportunities in Tech Innovation), our mentorship
              program is at the heart of our mission to empower the next
              generation through computer science education. We understand that
              mastering the fundamentals of technology can open doors to
              countless opportunities, and we are committed to equipping young
              individuals with the skills they need to thrive in the digital
              age.
            </motion.p1>

            <figure
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              {/* Image 1 */}
              <motion.figure
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                style={{
                  textAlign: "center",
                  position: "relative",
                  backgroundColor: "white",
                  width: "100%",
                  maxWidth: "120px",
                  height: "100px", // Set the height to 500px
                  borderRadius: "20px", // Add border-radius for rounded corners
                }}
              >
                <figcaption
                  style={{
                    color: "#61999c",
                    fontFamily: "'Spline Sans', sans-serif",
                    fontWeight: "bold",
                    fontSize: "50px",
                  }}
                >
                  <a href="http://www.w3.org/html/logo/">
                    <img
                      src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
                      width="63"
                      height="64"
                      alt="HTML5 Powered"
                      title="HTML5 Powered"
                    />
                  </a>
                </figcaption>
              </motion.figure>
              {/* Image 2 */}
              <motion.figure
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                style={{
                  textAlign: "center",
                  position: "relative",
                  width: "100%",
                  maxWidth: "120px", // Set the width to 500px
                  height: "100px", // Set the height to 500px
                  borderRadius: "20px",
                  backgroundColor: "white",
                }}
              >
                <a href="http://www.w3.org/html/logo/">
                  <img
                    src="https://www.w3schools.com/whatis/img_js.png"
                    width="63"
                    height="64"
                    alt="HTML5 Powered"
                    title="HTML5 Powered"
                  />
                </a>
              </motion.figure>
              {/* Image 3 */}
              <motion.figure
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                style={{
                  textAlign: "center",
                  position: "relative",
                  width: "100%",
                  maxWidth: "120px",
                  height: "100px", // Set the height to 500px
                  borderRadius: "20px",
                  backgroundColor: "white",
                }}
              >
                <a href="http://www.w3.org/html/logo/">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-css3-8-1175200.png?f=webp"
                    width="73"
                    height="74"
                    alt="HTML5 Powered"
                    title="HTML5 Powered"
                  />
                </a>
              </motion.figure>
            </figure>
          </motion.divNEW>
        </Content>
        <div>
          {" "}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "30px",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: "3%",
              }}
            >
              <div
                style={{
                  color: "white",
                  fontSize: "150px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                }}
              >
                01
              </div>
              <div
                style={{
                  color: "white",
                  fontSize: "60px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  width: "100%",
                  maxWidth: "100px",
                }}
              >
                24/7 Support
              </div>
            </div>
            <motion.img
              initial={{ opacity: 0, transform: "translate(-20px, 20px)" }}
              animate={{}}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, transform: "translate(0px, 0px)" }}
              src={discord}
              alt="TrashV"
              style={{
                width: "100%",
                maxWidth: "700px",
                height: "100%",
                maxHeight: "700px",
                transform: "translateY(20px)",
              }}
            />
          </div>
        </div>

        {/*Carousel for Reviews*/}
        {/* <ReviewsContainer>
          <h2>Reviews</h2>
          <BoxContainer ref={boxContainerRef}>
            <Box>
              <BoxText>Text for Box 1</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 2</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 3</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 3</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 3</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 3</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 3</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 3</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 3</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 3</BoxText>
            </Box>
          </BoxContainer>
          <ArrowButton onClick={scrollLeft} direction="left">
            &lt;
          </ArrowButton>
          <ArrowButton onClick={scrollRight} direction="right">
            &gt;
          </ArrowButton>
        </ReviewsContainer> */}

        {/* <footer className="footer p-10 bg-neutral text-neutral-content">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <motion.img
            initial={{ opacity: 0, transform: "translate(20px, -20px)" }}
            animate={{}}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, transform: "translate(0px, 0px)" }}
            src={css}
            alt="TrashV"
            style={{
              width: "100%",
              maxWidth: "700px",
              height: "100%",
              maxHeight: "700px",
              marginRight: "20px",
              transform: "translateY(20px)",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: "150px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
              }}
            >
              02
            </div>
            <div
              style={{
                color: "white",
                fontSize: "60px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                width: "100%",
                maxWidth: "400px",
              }}
            >
              Customized Course Content and Resources
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: "3%",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: "150px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
              }}
            >
              03
            </div>
            <div
              style={{
                color: "white",
                fontSize: "60px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
              }}
            >
              Live Sessions
            </div>
          </div>
          <motion.video
            ref={ref}
            initial={{ opacity: 0, transform: "translate(-20px, 20px)" }}
            animate={{
              opacity: inView ? 1 : 0,
              transform: inView
                ? "translate(0px, 0px)"
                : "translate(-20px, 20px)",
            }}
            transition={{ duration: 2 }}
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              maxWidth: "700px",
              height: "100%",
              maxHeight: "700px",
              transform: "translateY(20px)",
            }}
          >
            <source src={involveVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </div>

        <Footer>
          <LogoContainer>
            <LogoImage src={Logo} alt="Logo" />
            <p>
              YOTI: Youth Opportunities in Tech Innovation
              <br />
              Empovering Youth Since April 2024
            </p>
          </LogoContainer>

          <SocialMediaContainer>
            <a
              href="https://www.instagram.com/texasyoti/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                {/* Twitter icon */}
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/texasyoti/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                {/* Instagram icon */}
                <path d="M11.997 2c2.759 0 3.1.01 4.186.061 1.084.054 1.79.241 2.426.512.624.279 1.122.634 1.622 1.134.5.5.855.998 1.134 1.622.271.636.459 1.342.513 2.426.051 1.086.061 1.427.061 4.186s-.01 3.1-.061 4.186c-.054 1.084-.242 1.79-.513 2.426-.28.624-.635 1.122-1.134 1.622-.5.5-.998.855-1.622 1.134-.636.271-1.342.459-2.426.513-1.086.051-1.427.061-4.186.061s-3.1-.01-4.186-.061c-1.084-.054-1.79-.242-2.426-.513-.624-.28-1.122-.635-1.622-1.134-.5-.5-.855-.998-1.134-1.622-.271-.636-.459-1.342-.513-2.426-.051-1.086-.061-1.427-.061-4.186s.01-3.1.061-4.186c.054-1.084.242-1.79.513-2.426.28-.624.635-1.122 1.134-1.622.5-.5.998-.855 1.622-1.134.636-.271 1.342-.459 2.426-.513 1.086-.051 1.427-.061 4.186-.061zm0-2c-2.794 0-3.794.01-5.122.061-1.413.054-2.435.243-3.136.512-.807.279-1.475.646-2.122 1.293-.646.647-1.014 1.315-1.293 2.122-.27.701-.459 1.723-.512 3.136-.05 1.328-.061 2.328-.061 5.122s.01 3.794.061 5.122c.054 1.413.242 2.435.512 3.136.279.807.646 1.475 1.293 2.122.647.646 1.315 1.014 2.122 1.293.701.27 1.723.459 3.136.512 1.328.05 2.328.061 5.122.061s3.794-.01 5.122-.061c1.413-.054 2.435-.242 3.136-.512.807-.279 1.475-.646 2.122-1.293.646-.647 1.014-1.315 1.293-2.122.27-.701.459-1.723.512-3.136.05-1.328.061-2.328.061-5.122s-.01-3.794-.061-5.122c-.054-1.413-.242-2.435-.512-3.136-.279-.807-.646-1.475-1.293-2.122-.647-.646-1.315-1.014-2.122-1.293-.701-.27-1.723-.459-3.136-.512-1.328-.05-2.328-.061-5.122-.061zm0 5.795a6.205 6.205 0 1 0 0 12.41 6.205 6.205 0 0 0 0-12.41zm0 10.768a4.563 4.563 0 1 1 0-9.126 4.563 4.563 0 0 1 0 9.126zm10.036-10.243a1.245 1.245 0 1 1-2.49 0 1.245 1.245 0 0 1 2.49 0z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/youth-opportunities-in-tech-innovation/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>

            {/* Add more social media icons as needed */}
          </SocialMediaContainer>
        </Footer>
      </Wrapper>
    </Axis>
  );
}

const GalaButton = styled.button`
  background: rgba(0, 0, 0, 0.2);
  border: 0px;
  font-size: 16px;
  padding: 12px 30px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  max-width: 280px;
  backdrop-filter: blur(20px);
  z-index: 4;

  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;

  transition: background-color 0.3s ease-in-out;

  margin: 30px 95px; /* Adjust margin as needed */
`;

const Axis = styled.div`
  overflow-x: hidden;
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  background-color: rgba(
    51,
    51,
    51,
    0.3
  ); /* Background color with 30% opacity */
  color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 10px;
  z-index: 100;
  transition: transform 0.3s ease-in-out; /* Add transition for smooth animation */

  &:hover {
    transform: scale(1.1); /* Scale the image by 10% on hover */
  }
`;

const SocialMediaContainer = styled.nav`
  display: flex;
  gap: 10px;
  z-index: 100000000000000000000;

  a {
    text-decoration: none;
    color: white;
    z-index: 100000000000000000000;

    svg {
      width: 24px;
      height: 24px;
      fill: white; /* Set the fill color to white for all icons */
    }
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 87.5%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 52px; /* Adjust the font size to make it bigger */
  cursor: pointer;
  z-index: 10;
  transform: translateY(-60%);
  ${(props) => (props.direction === "right" ? "right: 80px;" : "left: 80px;")}
  border-radius: 10px; /* Add border-radius to round the corners */

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;

  .spline {
    position: absolute;
    margin: 0;
    top: 50px;
    right: 0;
    z-index: 1;
  }
`;

const Content = styled.div`
  position: relative; /* Change position to relative */
  top: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px; /* Add margin at the bottom to make space for the box container */

  div {
    margin: 100px;
    transform: translateX(235%);
  }

  div2 {
    margin-top: 190px;
    transform: translateX(7.5%);
  }

  div3 {
    margin: 0 90px;
  }
  div4 {
    margin: -60px 95px;
  }

  divContent {
    margin: 30px 95px;
  }

  div5 {
    transform: translateY(81%);
  }

  div6 {
    transform: translateX(77%);
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    transform: translateY(-15%);
    max-width: 600px;
    z-index: 3;
  }

  p {
    font-weight: normal;
    transform: translateY(-15%);
    line-height: 150%;
    max-width: 400px;
    z-index: 3;
  }

  button {
    transform: translateY(-15%);
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);
    z-index: 4;

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    transition: background-color 0.3s ease-in-out;
  }

  button:hover {
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Change this to your desired hover background color */
  }

  button2 {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    width: 180px;
    backdrop-filter: blur(20px);
    margin: -30px -220px;
    z-index: 4;
    transform: translateY(300%);

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    transition: background-color 0.3s ease-in-out;
  }

  button2:hover {
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Change this to your desired hover background color */
  }

  button4 {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    width: 180px;
    backdrop-filter: blur(20px);
    margin: -400px 990px;
    z-index: 4;
    transform: translateY(-900%);

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    transition: background-color 0.3s ease-in-out;
  }

  button4:hover {
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Change this to your desired hover background color */
  }

  h1,
  p,
  button {
    margin: 0 30px -30px 100px;
  }
`;
const Menu = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  transform: translateX(-2%);
  margin: 0 30px 0 100px;
  padding: 0;
  flex-direction: row;
  z-index: 2;

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border-radius: 14px;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 14px;
        background-color: transparent;
        z-index: -1;
        transition: background-color 0.3s ease;
      }

      &:hover {
        &:before {
          background-color: rgba(225, 225, 225, 0.2);
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    z-index: 100000000000;
    background-color: #333; /* Example background color for sidebar */
    transform: ${({ open }) =>
      open ? "translateX(-40%)" : "translateX(-250%)"};
    transition: transform 0.3s ease-in-out;
  }
`;

const Image = styled.img`
  z-index: 10000000000000000000000000000;
  cursor: pointer;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  /* Add additional styles for your image here */

  @media (min-width: 769px) {
    display: none;
  }
`;

const Image2 = styled.img`
  z-index: 10000000000000000000000000000;
  cursor: pointer;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  /* Add additional styles for your image here */
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
  width: ${(props) => props.children.length * 300}px;
`;

const CarouselImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  z-index: 10;
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;
