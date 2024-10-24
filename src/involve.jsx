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
import { Link } from 'react-router-dom';

export default function Involve() {
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
          className="spline"
          scene="https://prod.spline.design/FsF5dPiVSv4nOh-v/scene.splinecode"
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
            <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/clients">Clients</Link>
      <Link to="/involve">Involve</Link>
      <Link to="/mentor">Mentor</Link>
          </Menu>

          <h1>Get Involved</h1>
          <p style={{ marginTop: "40px" }}>
            Get involved with YOTI (Youth Opportunities in Tech Innovation) and
            join us in transforming the future through computer science
            education. As a non-profit organization, we are dedicated to
            bridging the digital divide by equipping young individuals with
            essential skills, mentorship, and resources in technology. Our
            collaborative efforts with non-profits and community organizations
            focus on developing impactful websites that amplify their missions.
            With the guidance of our dedicated volunteers and partners, we
            empower youth to create meaningful change through hands-on
            experience and innovative solutions. Together, we're building a
            community of tech-savvy leaders prepared to shape a brighter
            tomorrow.
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
              href="/AboutUs"
            >
              Learn More
            </a>
          </button>
          <divNEW
            style={{
              height: "600px",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "#61999c",
              textAlign: "center",
              padding: "20px", // Add padding to the container
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                fontFamily: "'Spline Sans', sans-serif",
                fontSize: "3vw",
                margin: "0", // Reset margin
                // Add padding to create space below
                zIndex: 101,
              }}
            >
              YOTI empowers students to learn and lead in technology by
              providing essential resources and a supportive community for
              developing tech skills and innovative projects.
            </h2>
            <h2
              style={{
                fontFamily: "'Catamaran', sans-serif",
                fontSize: "155px",
                margin: "-30px 0", // Adjust the margin
                marginBottom: "-90px",
              }}
            >
              "
            </h2>
            <p
              style={{
                fontFamily: "'Spline Sans', sans-serif",
                fontSize: "20px",
                color: "#555",
                maxWidth: "70%",
                margin: "-10px 0", // Add margin for spacing
              }}
            >
              "YOTI is a community that help me grow and learn together for
              making website and fun things as well. YOTI also provides more
              resources on CS project, I'm so happy to be a part of YOTI
              community "
            </p>
            <p
              style={{
                fontFamily: "'Catamaran', sans-serif",
                fontSize: "20px",
                color: "#61999c",
                maxWidth: "70%",
                margin: "20px", // Add margin for spacing
              }}
            >
              - Rifah Maulidya (Programming Lead and Mentor)
            </p>
          </divNEW>

          {/*Main Content*/}
        </Content>
        {/*More Content*/}
        {/*Entertainment*/}
        <div
          style={{
            height: "100%", //so when screen gets smaller it will fit properly and fill entire area

            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Center align horizontally
            textAlign: "center", // Center align text content
            gap: "20px", // Add space between image and text content
            padding: "0 20px", // Add padding horizontally for spacing
          }}
        >
          {/* Image on the left */}

          {/* Content on the right */}
          <div style={{ flex: "1" }}>
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "40px", // Adjusted font size for better fit
                color: "#34312aff",
                margin: "0", // Remove negative margin
                marginTop: "50px",
              }}
            >
              Opportunities and Positions Available
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#34312aff",
                margin: "20px 0", // Adjusted margin for better spacing
                maxWidth: "500px", // Limit width for readability
                marginLeft: "auto", // Align text content to the center
                marginRight: "auto", // Align text content to the center
                marginBottom: "50px",
              }}
            >
              At YOTI, we provide various opportunities for young tech
              enthusiasts to gain hands-on experience and develop their skills.
              Our programs are designed to foster a generation of innovators
              capable of driving positive change in their communities and
              beyond. Here are some of the roles and opportunities available:
            </p>
          </div>
        </div>
        ;{/* Opportunities and Positions Available */}
        <div
          style={{
            display: "flex",
            flexDirection: "row", // Stack sections horizontally by default
            justifyContent: "center", // Center align items horizontally
            gap: "50px", // Add space between sections
            marginTop: "50px", // Add some space above the sections
            marginBottom: "50px",
            flexWrap: "wrap", // Allow wrapping to stack items vertically on smaller screens
          }}
        >
          {/* Leadership Positions Section */}
          <div
            style={{
              backgroundColor: "#61999c",
              padding: "20px",
              display: "flex",
              flexDirection: "column", // Align items vertically
              alignItems: "center", // Center align the items horizontally
              gap: "20px", // Add some space between the items
              maxWidth: "300px", // Limit width for better responsiveness
              width: "100%", // Take full width
            }}
          >
            {/* Section Header */}
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "30px",
                color: "white",
                marginBottom: "10px", // Add some space below the header
                textAlign: "center", // Center align the header text
              }}
            >
              Leadership Positions:
            </h2>

            {/* Positions List */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                width: "100%", // Take full width to center-align the items
              }}
            >
              <div
                style={{
                  width: "100%", // Take full width on smaller screens
                  maxWidth: "250px", // Limit maximum width
                  padding: "15px",
                  border: "1px solid #47777a",
                  borderRadius: "10px",
                  backgroundColor: "#88adb3",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Chief Tech Officer (CTO)
              </div>
              <div
                style={{
                  width: "100%", // Take full width on smaller screens
                  maxWidth: "250px", // Limit maximum width
                  padding: "15px",
                  border: "1px solid #47777a",
                  borderRadius: "10px",
                  backgroundColor: "#88adb3",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Chief Operating Officer (COO)
              </div>
              <div
                style={{
                  width: "100%", // Take full width on smaller screens
                  maxWidth: "250px", // Limit maximum width
                  padding: "15px",
                  border: "1px solid #47777a",
                  borderRadius: "10px",
                  backgroundColor: "#88adb3",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Outreach Lead
              </div>
              <div
                style={{
                  width: "100%", // Take full width on smaller screens
                  maxWidth: "250px", // Limit maximum width
                  padding: "15px",
                  border: "1px solid #47777a",
                  borderRadius: "10px",
                  backgroundColor: "#88adb3",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Chief Management Officer (CMO)
              </div>
              <div
                style={{
                  width: "100%", // Take full width on smaller screens
                  maxWidth: "250px", // Limit maximum width
                  padding: "15px",
                  border: "1px solid #47777a",
                  borderRadius: "10px",
                  backgroundColor: "#88adb3",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Front-end Programming Lead
              </div>
              <div
                style={{
                  width: "100%", // Take full width on smaller screens
                  maxWidth: "250px", // Limit maximum width
                  padding: "15px",
                  border: "1px solid #47777a",
                  borderRadius: "10px",
                  backgroundColor: "#88adb3",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Back-end Programming Lead
              </div>
              <div
                style={{
                  width: "100%", // Take full width on smaller screens
                  maxWidth: "250px", // Limit maximum width
                  padding: "15px",
                  border: "1px solid #47777a",
                  borderRadius: "10px",
                  backgroundColor: "#88adb3",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Design Lead
              </div>
            </div>
          </div>

          {/* Example Boxes Section */}
          <div
            style={{
              backgroundColor: "#61999c",
              padding: "20px",
              display: "flex",
              flexDirection: "column", // Align items vertically
              alignItems: "center", // Center align the items horizontally
              gap: "20px", // Add some space between the items
              maxWidth: "300px", // Limit width for better responsiveness
              width: "100%", // Take full width
            }}
          >
            {/* Section Header */}
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "30px",
                color: "white",
                marginBottom: "10px", // Add some space below the header
                textAlign: "center", // Center align the header text
              }}
            >
              Different Types of Teams
            </h2>

            {/* Content for the Example Boxes Section */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                width: "100%", // Take full width to center-align the items
              }}
            >
              <div
                style={{
                  width: "100%", // Take full width on smaller screens
                  maxWidth: "250px", // Limit maximum width
                  padding: "15px",
                  border: "1px solid #47777a",
                  borderRadius: "10px",
                  backgroundColor: "#88adb3",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Outreach Team
              </div>
              <div
                style={{
                  width: "100%", // Take full width on smaller screens
                  maxWidth: "250px", // Limit maximum width
                  padding: "15px",
                  border: "1px solid #47777a",
                  borderRadius: "10px",
                  backgroundColor: "#88adb3",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Programming Team
              </div>
              <div
                style={{
                  width: "100%", // Take full width on smaller screens
                  maxWidth: "250px", // Limit maximum width
                  padding: "15px",
                  border: "1px solid #47777a",
                  borderRadius: "10px",
                  backgroundColor: "#88adb3",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Design Team (Figma Design, Art, etc)
              </div>
              <div
                style={{
                  width: "100%", // Take full width on smaller screens
                  maxWidth: "250px", // Limit maximum width
                  padding: "15px",
                  border: "1px solid #47777a",
                  borderRadius: "10px",
                  backgroundColor: "#88adb3",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Mentor Team (Mentoring Students on Tech and STEM related topics)
              </div>
              {/* Add more example boxes as needed */}
            </div>
          </div>
        </div>
        {/*Why you should Join Content*/}
        <section
          style={{
            height: "100%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Center content horizontally
            flexDirection: "column", // Stack content vertically on smaller screens
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          {/* Content Wrapper */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              maxWidth: "1000px", // Max width for content
            }}
          >
            {/* Image on the left */}
            <iframe
              src="https://discord.com/widget?id=1230961702502138038&theme=dark"
              width="350"
              height="500"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              style={{
                marginRight: "20px",
                marginBottom: "20px", // Spacing between iframe and content
                borderRadius: "10px", // Rounded corners
              }}
            ></iframe>

            {/* Content on the right */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                maxWidth: "600px", // Limit width of content
              }}
            >
              <h2
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                  fontSize: "40px",
                  color: "#264878ff",
                  marginBottom: "20px", // Space below heading
                }}
              >
                Why You Should Join
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "#264878ff",
                  marginBottom: "20px", // Space below paragraph
                }}
              >
                YOTI provides a unique platform for youth to learn, lead, and
                make a significant impact. You don’t need prior experience—just
                a willingness to learn and grow. Additionally, involvement in
                YOTI can help students achieve the PVSA award and other special
                recognitions.
                <br />
                <br />
                Join us and be part of a community that is shaping the future of
                technology and making a difference in the world!
              </p>
              <button
                style={{
                  backgroundColor: "#d1e4e8",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  color: "#61999c",
                  fontWeight: "bold",
                  fontSize: "18px",
                  borderColor: "#61999c",
                  borderWidth: "2px",
                  borderStyle: "solid", // Add border
                  transition: "background-color 0.3s ease",
                }}
              >
                <a
                  style={{ color: "#61999c", textDecoration: "none" }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdhB4T4yC6KiRqw5iOE6er2Z73Y9rrdy17xZYeO2YmBBcGq2Q/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fill out the Form!
                </a>
              </button>
            </div>
          </div>
        </section>
        ;{/*</footer> */}
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
    top: -0px;
    right: -100px;
    z-index: -1;
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
