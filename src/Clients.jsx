import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Logo from "./images/logoYOTIf.png";
import involve from "./images/involve.png";
import React, { useRef, useState } from "react";
import TrashV from "./images/TrashV.png";
import PartyV from "./images/PartyV.png";
import FishV from "./images/FishV.png";
import Underwater from "./images/Underwater.png";
import Suit from "./images/Suit.jpg";
import Bus from "./images/Bus.png";
import Dance from "./images/Dance.png";
import Auction from "./images/Auction.jpg";
import Bar from "./images/bar.png";
import LogoSurya from "./images/projectSuryaLogo.png";
import pKids from "./images/pKids.png";
import p1 from "./images/P (1).png";
import p2 from "./images/P (2).png";
import p3 from "./images/P (3).png";
import p4 from "./images/P (4).png";
import p5 from "./images/P (5).png";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


export default function Clients() {
  //Arrow scroll
  const boxContainerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  const scrollLeft = () => {
    if (boxContainerRef.current) {
      boxContainerRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (boxContainerRef.current) {
      boxContainerRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  };

  return (
    <Axis>
      <Wrapper>
        <Spline
          style={{ zIndex: -100 }}
          className="spline"
          scene="https://prod.spline.design/qV750Yn-h8blfUwR/scene.splinecode"
        />
        <Content>
          <Image
            src={Bar}
            alt="Logo"
            onClick={toggleMenu}
            style={{ position: "absolute", top: "-40px", left: "20px" }} // Adjust positioning as needed
          />
          <Menu open={open}>
            <Image2
              src={Logo}
              alt="Logo"
              onClick={toggleMenu}
              // Adjust positioning as needed
            />
            <Image3
              src={Bar}
              alt="Logo"
              onClick={toggleMenu}
              style={{ position: "absolute", top: "0px", left: "10px" }}
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

          <h1>Past Clients</h1>
          <p>
            <br />
            Welcome to our portfolio showcase, where we highlight our
            collaborations with various clients to create impactful websites.
            Each project represents a unique partnership where we've worked
            closely with businesses and organizations to understand their
            specific needs and goals. Our commitment to excellence is evident in
            every website we craft, tailored to showcase each client's brand
            identity and enhance their online presence effectively. As we
            continue to expand our portfolio, we look forward to sharing more
            success stories that demonstrate our dedication to delivering
            tailored digital solutions.
          </p>
          <button>
            <img
              src={involve}
              alt="involve"
              style={{ width: "30px", height: "30px" }}
            />
                <Link to="/about" style={{ color: "white", textDecoration: "none", marginRight: "20px", marginLeft: "20px" }}>Learn more</Link>

          </button>
          <divNEW
            style={{
              height: "100%",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "#61999c",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "'Spline Sans', sans-serif",
                fontSize: "55px",
                margin: "20px", // Adjust the margin as needed
                transform: "translateY(70px)",
              }}
            >
              Project Surya
            </h2>
            <h2
              style={{
                fontFamily: "'Catamaran', sans-serif",
                fontSize: "155px",
                margin: "20px", // Adjust the margin as needed
              }}
            >
              "
            </h2>
            <p
              style={{
                fontFamily: "'Spline Sans', sans-serif",
                fontSize: "20px",
                color: "#555", // You can change the color if needed
                maxWidth: "70%",
                transform: "translateY(-140px)",
              }}
            >
              "We envision a world where good health and well-being are made
              accessible, affordable and available to everyone, including
              millions of T1 diabetics globally. Our mission is to ensure that
              every child with T1 diabetes achieves their best state of health
              through positive aid and timely intervention.”
            </p>
            <p
              style={{
                fontFamily: "'Catamaran', sans-serif",
                fontSize: "20px",
                color: "#61999c", // You can change the color if needed
                maxWidth: "70%",
                transform: "translateY(-100px)",
              }}
            >
              - Divaa Uthkarsha (Founder of Project Surya)
            </p>
          </divNEW>

          {/*Main Content*/}
        </Content>
        {/*More Content*/}
        <div
          style={{
            position: "relative",
            height: "500px",
            backgroundImage: `url(${pKids})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "black",
              opacity: 0.5, // Adjust opacity here
            }}
          />
          <div
            style={{
              position: "relative",

              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center", // Center the content
              color: "white", // Ensure the text is visible
            }}
          >
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "50px",
                margin: "-50px 0",
                marginLeft: "15px",
                marginRight: "15px",
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
              }}
            >
              Project Surya aims to{" "}
              <span
                style={{
                  color: "#61999c",
                  textShadow: `
            -1px -1px 0 white,  
             1px -1px 0 #fff,
            -1px  1px 0 #fff,
             1px  1px 0 #fff
          `,
                }}
              >
                support underprivileged diabetic children
              </span>{" "}
              and support pro-diabetic law and action in India. They create
              their own{" "}
              <span
                style={{
                  color: "#61999c",
                  textShadow: `
            -1px -1px 0 white,  
             1px -1px 0 #fff,
            -1px  1px 0 #fff,
             1px  1px 0 #fff
          `,
                }}
              >
                workshops
              </span>{" "}
              with NGOs and have{" "}
              <span
                style={{
                  color: "#61999c",
                  textShadow: `
            -1px -1px 0 white,  
             1px -1px 0 #fff,
            -1px  1px 0 #fff,
             1px  1px 0 #fff
          `,
                }}
              >
                awareness modules
              </span>{" "}
              to help spread their valuable cause.
            </h2>
          </div>
        </div>
        {/*Entertainment*/}
        {/*Dress Code Content*/}
        <div
          style={{
            height: "100%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            zIndex: 2,
            padding: "0 20px", // Added padding for better responsiveness
          }}
        >
          {/* Image on the left */}
          <img
            src={LogoSurya} // Replace with your image URL
            alt="Sample Image"
            style={{
              margin: "0",
              width: "100%",
              maxWidth: "500px",
              height: "100%",
              maxHeight: "500px",
              marginBottom: "50px",
            }}
          />
          {/* Content on the right */}
          <div>
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "clamp(3rem, 10vw, 5rem)", // Responsive font size
                color: "#61999c",
                width: "100%",
                maxWidth: "600px",

                textAlign: "left", // Center horizontally
              }}
            >
              Project Surya Website
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#61999c",
                marginRight: "10px",
                width: "100%",
                maxWidth: "500px",
                textAlign: "left",
              }}
            >
              We are delighted to share that our team had the honor of designing
              and developing the official website for Project Surya. With a
              focus on user-friendliness and visual appeal, we crafted a
              platform that embodies Project Surya's commitment to supporting
              underprivileged diabetic children and advocating for pro-diabetic
              legislation in India. Through interactive features, we showcased
              their collaborative workshops with NGOs and comprehensive
              awareness modules. Our aim was to create a website that not only
              educates but also serves as a powerful tool for outreach and
              advocacy, empowering Project Surya to connect with their audience
              and advance their impactful mission.
            </p>
          </div>
        </div>
        {/*Sponsors Content*/}
        <section
          style={{
            backgroundColor: "#61999c",
            padding: "20px",
            margin: "0",
          }}
        >
          <h1
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center", // Center horizontally
              //margin: "auto", // Center vertically
              //margin: "20px 300px",
              fontSize: "clamp(3rem, 5vw, 5rem)",
            }}
          >
            Here’s how we
            <span> </span>
            <span
              style={{
                color: "#2E353D",
              }}
            >
              helped
            </span>
            <span> </span>
            them.
          </h1>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              {/* First Row */}
              <figure
                style={{
                  textAlign: "center",
                  position: "relative",

                  width: "100%", // Set the width to 500px
                  //height: "350px", // Set the height to 500px
                  borderRadius: "20px", // Add border-radius for rounded corners
                  //marginBottom: "50px",
                }}
              >
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  whileTap={{
                    scale: 0.8,

                    borderRadius: "100%",
                  }}
                  src={p2}
                  alt="Image 1"
                  style={{
                    width: "100%",
                    // margin: "25px 0",
                    maxWidth: "800px", //Get to know us
                    minWidth: "100px",
                  }}
                  className={HoverStyles}
                />
              </figure>
              <figure
                style={{
                  textAlign: "center",
                  position: "relative",
                  width: "100%", // Set the width to 500px
                  maxWidth: "500px",
                  //height: "450px", // Set the height to 500px
                  borderRadius: "20px",
                }}
              >
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  whileTap={{
                    scale: 0.8,

                    borderRadius: "100%",
                  }}
                  src={p3}
                  alt="Image 2"
                  style={{
                    width: "100%",
                    //margin: "25px 0",
                    maxWidth: "500px",
                    //marginTop: "50px",
                  }}
                  className={HoverStyles}
                />
              </figure>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
              }}
            >
              {/* Second Row */}
              <figure
                style={{
                  textAlign: "center",
                  position: "relative",
                  width: "100%",
                  maxWidth: "410px", // Set the width to 500px
                  // Set the height to 500px
                  borderRadius: "20px",
                }}
              >
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  whileTap={{
                    scale: 0.8,

                    borderRadius: "100%",
                  }}
                  src={p5}
                  alt="Image 3"
                  style={{
                    width: "100%",
                    //margin: "25px 0", //our actions
                    maxWidth: "500px",
                    minWidth: "100px",
                  }}
                  className={HoverStyles}
                />
              </figure>
              <figure
                style={{
                  textAlign: "center",
                  position: "relative",
                  width: "100%",
                  maxWidth: "1000px", // Set the width to 500px
                  //height: "300px", // Set the height to 500px
                  borderRadius: "20px",
                }}
              >
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  whileTap={{
                    scale: 0.8,

                    borderRadius: "100%",
                  }}
                  src={p4}
                  alt="Image 4"
                  style={{
                    width: "100%",
                    //margin: "25px 0",
                    maxWidth: "1000px", // contact us
                    // marginRight: "400px",
                    //marginLeft: "-300px",
                    minWidth: "100px",
                  }}
                  className={HoverStyles}
                />
              </figure>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "150px", // Adjust as needed to center vertically
            }}
          >
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,

                borderRadius: "100%",
              }}
              style={{
                background: "rgba(0, 0, 0, 0.2)",
                border: "0px",
                fontSize: "30px",
                padding: "16px 40px",
                borderRadius: "14px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "white",
                maxWidth: "280px",
                backdropFilter: "blur(20px)",

                display: "flex",
                gap: "12px",
                justifyContent: "center",
                alignItems: "center",
                transition: "background-color 0.3s ease-in-out",
                margin: "30px 95px", // Adjust margin as needed
              }}
            >
              <a
                href="https://sachchitbalamurugan.github.io/Project-SuryaTEST/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "5px",
                  margin: "10px",
                  fontSize: "clamp(1rem, 3vw, 3rem)",
                }}
              >
                Visit Website
              </a>
            </motion.button>
          </div>
          <h1
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center", // Center horizontally
              //margin: "auto", // Center vertically
              //margin: "20px 300px",
              fontSize: "clamp(3rem, 5vw, 5rem)",
            }}
          >
            You Could Be
            <span> </span>
            <span
              style={{
                color: "#2E353D",
              }}
            >
              NEXT
            </span>
            <span style={{ color: "#1ABEF2" }}>!</span>
          </h1>
          <h2
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center", // Center horizontally
              //margin: "auto", // Center vertically
              //margin: "20px 300px",
              fontSize: "clamp(2rem, 5vw, 5rem)",
            }}
          >
            Please visit our contact us page to find out more.
          </h2>
        </section>

        {/*</footer> */}
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

const HoverStyles = `
&:hover {
  transform: scale(1.1); // Scale the image by 10% on hover
}
`;

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

  transition: transform 0.3s ease-in-out; /* Add transition for smooth animation */

  &:hover {
    transform: scale(1.1); /* Scale the image by 10% on hover */
  }
`;

const SocialMediaContainer = styled.nav`
  display: flex;
  gap: 10px;

  a {
    text-decoration: none;
    color: white;

    svg {
      width: 24px;
      height: 24px;
      fill: white; /* Set the fill color to white for all icons */
    }
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
    top: 200px;
    right: -500px;
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
  }

  p {
    font-weight: normal;
    transform: translateY(-15%);
    line-height: 150%;
    max-width: 400px;
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

const Image3 = styled.img`
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
