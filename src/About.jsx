import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Logo from "./images/logoYOTIf.png";
import involve from "./images/involve.png";
import React, { useRef, useState } from "react";

import TrashV from "./images/TrashV.png";
import PartyV from "./images/PartyV.png";
import FishV from "./images/FishV.png";
import Underwater from "./images/logoYOTIf.png";
import Rifah from "./images/Rifah.png";
import Shritan from "./images/Shritan.png";
import Armaan from "./images/Armaan.png";
import Bar from "./images/bar.png";
import Sachchit from "./images/Sachchit2.png";
import { motion } from "framer-motion";
import Shivalika from "./images/shivalika.jpg";

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

export default function About() {
  const text =
    "We take pride in our commitment to delivering high-quality websites at no cost, empowering organizations to advance their missions effectively";
  const text1 = "What We Do";
  const boxContainerRef = useRef(null);
  const [open, setOpen] = useState(false);

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

  const toggleMenu = () => {
    setOpen(!open);
  };

  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <Axis>
      <Wrapper>
        <Spline
          className="spline"
          scene="https://prod.spline.design/xX6h-eXVHB6h2SZD/scene.splinecode"
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
             <li>
              <a href="/testvite/home">Home</a>
            </li>
            <li>
              <a href="./about">About Us</a>
            </li>
              
            <li>
              <a href="/testvite/blog">Blog</a>
            </li>
            <li>
              <a href="/testvite/contact">Contact Us</a>
            </li>
            <li>
              <a href="/testvite/clients">Past Clients</a>
            </li>
            <li>
              <a href="/testvite/involve">Get Involved</a>
            </li>
            <li>
              <a href="/testvite/mentor">Mentorship</a>
            </li>
          </Menu>

          <h1>About Us</h1>
          <p>
            At YOTI (Youth Opportunities in Tech Innovation), we are dedicated
            to bridging the digital divide by empowering young individuals
            through computer science education. Our mission is to equip the next
            generation with the skills and confidence they need to excel in the
            technology sector and become leaders of innovation.
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
              Get Involved Now
            </a>
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
                fontSize: "3vw",
                margin: "0", // Reset margin
                fontSize: "clamp(30px, 5vw, 76px)",

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
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3.5 }}
              style={{
                fontFamily: "'Catamaran', sans-serif",
                fontSize: "155px",
                margin: "-30px 0", // Adjust the margin
                marginBottom: "-60px",
              }}
            >
              "
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3.5 }}
              style={{
                fontFamily: "'Spline Sans', sans-serif",
                fontSize: "20px",
                color: "#555",
                maxWidth: "70%",
                margin: "-10px 0", // Add margin for spacing
              }}
            >
              "YOTI has been instrumental in helping us take our mission for
              universal health equity forward. They designed Project Surya’s
              website beautifully and displayed great work! They met all the
              deliverables and we are extremely content with their finished
              product!"
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3.5 }}
              style={{
                fontFamily: "'Catamaran', sans-serif",
                fontSize: "20px",
                color: "#61999c",
                maxWidth: "70%",
                margin: "20px", // Add margin for spacing
              }}
            >
              - Divaa Uthkarsha (Founder of Project Surya)
            </motion.p>
          </divNEW>
          <motion.divNEW1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{
              height: "100%",
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
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={headingVariants}
              style={{
                fontFamily: "'Spline Sans', sans-serif",
                fontSize: "clamp(50px, 5vw, 76px)",
                margin: "0", // Reset margin
                //marginRight: "300px",
                // Add padding to create space below
                zIndex: 101,
              }}
            >
              {text1.split("").map((char, index) => (
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
              Through a combination of resources, training programs, and
              mentorship initiatives, we provide young people with the tools and
              support they need to succeed in the digital age. From coding
              workshops and online courses to hands-on projects and internships,
              we offer a comprehensive learning experience that nurtures
              creativity, critical thinking, and problem-solving skills.
            </motion.p1>

            <figure1
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              {/* Image 1 */}
              <motion.figure1
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
                  maxWidth: "320px",
                  height: "100%", // Set the height to 500px
                  marginLeft: "50px",
                  marginRight: "50px",
                  borderRadius: "20px", // Add border-radius for rounded corners
                }}
              >
                <figcaption1
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#61999c",
                    fontFamily: "'Spline Sans', sans-serif",
                    fontWeight: "bold",
                    fontSize: "50px",
                  }}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="86"
                    height="86"
                    fill="#61999c"
                    class="bi bi-gear"
                    viewBox="0 0 16 16"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20, // Adjust the duration as needed
                      ease: "linear",
                    }}
                    style={{
                      alignSelf: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                  </motion.svg>
                  <h1
                    style={{
                      alignSelf: "center",
                      textAlign: "center", // Center the text
                      marginRight: "90px",
                      color: "#2e353d",
                      fontSize: "50px",
                      fontSize: "clamp(3rem, 3.5vw, 3.5rem)",
                      marginBottom: "10px",
                    }}
                  >
                    Expertise
                  </h1>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "12px",
                      marginRight: "95px",
                      width: "100%",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    Our team consists of experienced educators, industry
                    professionals, and passionate volunteers who are committed
                    to providing high-quality education and mentorship.
                  </p>
                </figcaption1>
              </motion.figure1>
              {/* Image 2 */}
              <motion.figure1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  position: "relative",
                  width: "100%",
                  maxWidth: "320px",

                  height: "100%",
                  borderRadius: "20px",
                  backgroundColor: "white",
                  marginLeft: "50px",
                  marginRight: "50px",
                }}
              >
                <motion.svg
                  width="86"
                  height="86"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <path
                    fill="#61999c"
                    d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
                  />
                </motion.svg>
                <h1
                  style={{
                    color: "#2e353d",
                    fontSize: "50px",
                    marginBottom: "10px",
                    marginRight: "90px",
                  }}
                >
                  Community
                </h1>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "12px",
                    marginRight: "95px",
                    width: "100%",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  We believe in the power of community and strive to create a
                  supportive and inclusive environment where every individual
                  feels valued and empowered to succeed.
                </p>
              </motion.figure1>

              {/* Image 3 */}
              <motion.figure1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                style={{
                  marginLeft: "50px",
                  marginRight: "50px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  position: "relative",
                  width: "100%",
                  maxWidth: "320px",
                  height: "100%",
                  borderRadius: "20px",
                  backgroundColor: "white",
                }}
              >
                <motion.svg
                  width="86"
                  height="86"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <path
                    fill="#61999c"
                    d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z"
                  />
                </motion.svg>
                <h1
                  style={{
                    color: "#2e353d",
                    fontSize: "50px",
                    marginBottom: "10px",
                    marginRight: "90px",
                  }}
                >
                  Innovation
                </h1>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "12px",
                    marginRight: "80px",
                    width: "100%",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "20px",
                  }}
                >
                  Technology is constantly evolving, and so are we. We stay
                  ahead of the curve by embracing new trends, technologies, and
                  teaching methodologies to ensure our students are prepared for
                  the future.
                </p>
              </motion.figure1>
            </figure1>
          </motion.divNEW1>
          <section
            style={{
              backgroundColor: "#88adb3",
              padding: "20px",
              margin: "-40px 0",
            }}
          >
            <h1
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                margin: "20px auto",
              }}
            >
              Meet Our Team
            </h1>
            <figure
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap", // Allow wrapping of elements
              }}
            >
              {/* Image 1 */}
              <motion.figure
                whileHover={{ scale: 1.05 }}
                style={{
                  textAlign: "center",
                  position: "relative",
                  boxShadow: "0px 5px 10px rgba(0, 135, 184, 0.5)",
                  width: "260px",
                  borderRadius: "20px",
                  margin: "10px", // Add margin for spacing when stacked
                }}
              >
                <img
                  src={Sachchit}
                  alt="Image 1"
                  style={{
                    width: "100%",
                    margin: "25px 0",
                    maxWidth: "200px",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className={HoverStyles}
                />
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Sachchit Balamurugan (CEO/Founder)
                </figcaption>
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    textAlign: "left",
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                >
                  <br /> I'm Sachchit Balamurugan, the CEO of YOTI and a high
                  school Junior with a diverse background in Research, Computer
                  Science, Health care, and Machine Learning. <br /> <br /> I
                  have done independent research that focused on predicting
                  Adrenocortical Carcinoma using hyperparameter-optimized
                  Conventional Neural Networks (CNNs). By employing Optuna for
                  model optimization, I achieved higher accuracy with a
                  pretrained MobileNetV2 compared to existing methods. My work
                  won 3rd at the Forth Worth Regional Science Fair, and was a
                  qualifier at the Texas State Science and Engineering Fair
                  (TXSEF) and a RISE Global challenge finalist (Out of thousands
                  of applications). <br /> <br /> I'm engaged in Quantum
                  Chemistry research at Southern Methodist University,
                  investigating Triaminopyrimidine (TAP) as a potential ancestor
                  of RNA. Utilizing geometry optimization calculations and
                  frequency analysis, we aim to validate TAP's significance in
                  biochemical evolution. Our research continues to evolve as we
                  gather and analyze additional data. <br />.
                </figcaption>
              </motion.figure>
              {/* Image 2 */}
              <motion.figure
                whileHover={{ scale: 1.05 }}
                style={{
                  textAlign: "center",
                  position: "relative",
                  boxShadow: "0px 5px 10px rgba(0, 135, 184, 0.5)",
                  width: "260px",
                  borderRadius: "20px",
                  margin: "10px",
                }}
              >
                <img
                  src={Armaan}
                  alt="Image 2"
                  style={{
                    width: "100%",
                    margin: "25px 0",
                    maxWidth: "200px",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className={HoverStyles}
                />
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Armaan Sharma <br /> (Co-Founder)
                </figcaption>
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    textAlign: "left",
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                >
                  <br /> Hi! I am Armaan Sharma, an incoming senior in high
                  school, and the co-founder of this organization. I am a
                  motivated teenager interested in the fields of computer
                  science and business, and I am currently learning machine
                  learning and financial hypotheses, to figure out a bridge
                  between my two passions. I have a heart for volunteering and
                  teaching. <br /> <br /> I have experience doing research for
                  competitions such as the Dallas Regional Science and
                  Engineering Fair, where our work got third place recognition.{" "}
                  <br /> <br /> I am on the software development team of various
                  organizations, and I have experience working on both the
                  frontend and backend of many platforms. I have also played
                  piano for around 10 years now, and it is a huge passion of
                  mine.{" "}
                </figcaption>
              </motion.figure>
              {/* Image 3 */}
              <motion.figure
                whileHover={{ scale: 1.05 }}
                style={{
                  textAlign: "center",
                  position: "relative",
                  boxShadow: "0px 5px 10px rgba(0, 135, 184, 0.5)",
                  width: "260px",
                  borderRadius: "20px",
                  margin: "10px",
                }}
              >
                <img
                  src={Rifah}
                  alt="Image 3"
                  style={{
                    width: "100%",
                    margin: "25px 0",
                    maxWidth: "200px",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className={HoverStyles}
                />
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Rifah Maulidya <br /> (Programing Lead and Mentor)
                </figcaption>
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    textAlign: "left",
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                >
                  <br /> Hi everyone! My name is Rifah Maulidya and you can call
                  me Rifah. I graduated from senior high school in Indonesia
                  majoring in natural science. <br /> <br /> In my spare time, I
                  enjoy reading psychology books and hopefully I can add more
                  topics like CS and robotics to be added in my booklist!
                  Currently reading Superintelligence book. <br /> <br />{" "}
                  Another activity that I always do is coding, I make my own
                  models using dataset from Kaggle or other online resources. I
                  have made bunch of it specifically with Python that I have
                  keep it on GitHub and Google Collab.
                  <br /> <br /> For fun, I'm watching K-dramas or music videos
                  of my favorite kpop group, I'm a big fan of them! Sometimes I
                  go with friends and play games in our local mall.
                </figcaption>
              </motion.figure>
              {/* Image 4 */}
              <motion.figure
                whileHover={{ scale: 1.05 }}
                style={{
                  textAlign: "center",
                  position: "relative",
                  boxShadow: "0px 5px 10px rgba(0, 135, 184, 0.5)",
                  width: "260px",
                  borderRadius: "20px",
                  margin: "10px",
                }}
              >
                <img
                  src={Shritan}
                  alt="Image 4"
                  style={{
                    width: "100%",
                    height: "260px",
                    margin: "25px 0",
                    maxWidth: "200px",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className={HoverStyles}
                />
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Shritan Khammamkar <br /> (Outreach Lead)
                </figcaption>
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    textAlign: "left",
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                >
                  <br /> Hello! My name is Shritan Khammamkar, and I'm an
                  incoming senior at Independence High School. I'm interested in
                  the fields of physics and engineering, particularly aerospace,
                  and I'm enthusiastic about technology in this field as well.
                  I'm interested in robotics and engineering mechanics too!
                  <br /> <br /> I also play bass clarinet and am in my second
                  year as a section leader for the Independence High School band
                  program, and I have been learning carnatic vocals for almost
                  13 years and counting. In my free time, I enjoy hanging out
                  with my friends and family, playing video games, and going to
                  the park. I'm very excited to work with this great team!
                </figcaption>
              </motion.figure>
              {/* <motion.figure
                whileHover={{ scale: 1.05 }}
                style={{
                  textAlign: "center",
                  position: "relative",
                  boxShadow: "0px 5px 10px rgba(0, 135, 184, 0.5)",
                  width: "260px",
                  borderRadius: "20px",
                  margin: "10px", // Add margin for spacing when stacked
                }}
              >
                <img
                  src={Shivalika}
                  alt="Image 1"
                  style={{
                    width: "100%",
                    margin: "25px 0",
                    maxWidth: "200px",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className={HoverStyles}
                />
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Shivalika Vig (CMO)
                </figcaption>
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    textAlign: "left",
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                >
                  <br />
                  I’m Shivalika from Frisco, Texas and am honored to serve as
                  CMO of this organization. I hope to help our organization grow
                  and be able to aid more nonprofits in their noble pursuits. I
                  will be a senior in high school next year and am working to
                  pursue a career in engineering. Alongside that in my spare
                  time I sing and play guitar as well as read! <br /> <br />
                </figcaption>
              </motion.figure> */}
            </figure>
          </section>
        </Content>

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
    top: -10px;
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
