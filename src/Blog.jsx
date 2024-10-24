import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Logo from "./images/logoYOTIf.png";
import involve from "./images/involve.png";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import TrashV from "./images/TrashV.png";
import PartyV from "./images/PartyV.png";
import FishV from "./images/FishV.png";
import Underwater from "./images/logoYOTIf.png";
import Bar from "./images/bar.png";
import Rifah from "./images/Rifah.png";
import Shritan from "./images/Shritan.png";
import Armaan from "./images/Armaan.png";
import Chart from "./images/Chart.png";
import Research from "./images/ResearchPaperACC.pdf";
import AResearch from "./images/armaanResearch.webp";
import blogR from "./images/blogR.webp";
import blogR2 from "./images/blogR2.webp";
import { Link } from 'react-router-dom';


export default function Blog() {
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

  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

  // Handler for updating the search query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter function to match the search query
  const filterContent = (content) => {
    return content.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const teamMembers = [
    {
      name: "Optimizing Adrenocortical Carcinoma Cancer Diagnosis and Predictions through Transfer Learning and Hyperparameter-Optimized CNN Models",
      image: Chart,
      category: "Machine Learning",
      author: "Sachchit Balamurugan",
      education: "Rising Junior In HS",
      description:
        "Adrenocortical carcinoma (ACC) is very rare and highly invasive, which makes it necessary to thoroughly diagnose and evaluate clinical and imaging assessment. A combination of MRI imaging and clinical information might help diagnose the disease at its initial stage. Deep learning algorithms have become increasingly popular in the medical field due to their ability to recognize complex patterns which creates new opportunities for improving medical imaging accuracy, especially by finding out anomalies and differentiating benign and malice lesions. Data is the basis of any machine learning, but medical image is rare and deep learning requires a large amount of training data. As a solution, this study aims to utilize transfer learning, which uses the knowledge gained by the model on one dataset to aid in classifying another one. This study evaluates the effectiveness of the transfer learning method along with several existing pre-trained architecture models like VGG16 and ResNet50, and others like MobileNetV2, ConvNeXtTiny and a custom CNN models designed with the assistance of hyperparameter optimization framework Optuna to distinguish the best hyperparameter.  This research aims to contribute to the development of effective diagnostic tools for ACC by employing Models capable of comprehending complex textures in MRI images.",
      link: Research,
    },
    {
      name: "Mathematical Modelling Of Mobile Aerial Networks For Maximum Data Coverage",
      image: AResearch,
      category: "Science",
      author: "Armaan Sharama",
      education: "Rising Senior In HS",
      description:
        "Our study focuses on improving communication and data transit efficiency to meet the needs of the digital era. In order to efficiently place drones to fulfill the signal strength expectations of clustered users, we offer a strategic optimization technique that makes use of the BGFS algorithm and K-clustering. Our technology promises increases in signal strength quality by using optimum drone positions, as demonstrated by higher data speeds, shorter signal ranges, and more customer satisfaction. Our results may be used to important situations such as emergency response, guaranteeing reliable communication and helping homes by improving overall customer happiness and streamlining telecom networks.",
      link: AResearch,
    },
    {
      name: "Tensorflow and The Behind of Deepfakes",
      image: blogR,
      category: "Machine Learning",
      author: "Rifah Maulidya",
      education: "Rising College Student",
      description:
        "In today's information revolution, deepfakes—AI-generated realistic duplicates of individuals—have gained significant attention and concern. Central to this technology is TensorFlow, a powerful tool enhancing AI capabilities to create lifelike virtual clones of celebrities. This article examines TensorFlow's role in AI development, the mechanics of deep fakes, their societal and legal implications, and the future of AI in media. Deep fakes have both amazed and alarmed the public, demonstrating AI's potential while highlighting the importance of ethical and legal frameworks to manage its impact.",
      link: "https://medium.com/adventures-in-consumer-technology/tensorflow-and-the-behind-of-deepfakes-dadeaa3d8bad",
    },
    {
      name: "The Next of Alzheimer’s in The Future",
      image: blogR2,
      category: "Artifical Intelligence",
      author: "Rifah Maulidya",
      education: "Rising College Student",
      description:
        "This article discusses the potential of Neuralink, an AI chip developed by Elon Musk that integrates with human consciousness, to address Alzheimer's disease—a common and still largely mysterious form of dementia. Neuralink, which operates through a brain-computer interface, may enable control of digital devices via thought by decoding nerve signals and transmitting information through electrodes attached to brain neurons. The technology, still in the trial phase and yet to receive FDA approval, aims to restore cognitive functions and improve the quality of life for Alzheimer's patients. It reflects a broader exploration of how merging human intelligence with advanced technology might revolutionize various facets of life.",
      link: "https://medium.com/illuminations-mirror/the-next-of-alzheimers-in-the-future-9fe812251bb9",
    },
    // Add more team members as needed
  ];

  return (
    <Axis>
      <Wrapper>
        <Spline
          className="spline"
          scene="https://prod.spline.design/jKSglJCT6PAbXrTI/scene.splinecode"
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

          <h1>Blog</h1>
          <p>
            Welcome to our blog page! Dive into a wealth of knowledge curated by
            our esteemed members. Here, you'll find insightful research
            contributions, thought-provoking articles, and much more. Explore
            diverse perspectives and stay updated on the latest discussions in
            our community. Join us on this journey of discovery and
            enlightenment!
          </p>

          <divAJDAOS style={{ zIndex: "1000" }}>
            {/* Search input */}
            <input
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#d1e4e8",
                padding: "5px 10px",
                borderRadius: "20px",

                marginBottom: "-50px",
                marginLeft: "auto", // Set left margin to auto to center horizontally
                marginRight: "auto", // Set right margin to auto to center horizontally
                color: "#61999c",
                fontWeight: "bold",
                maxWidth: "400px", // Set maximum width to 400px
                height: "30px",
              }}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {/* Your existing content */}
            {/* Add search filtering to your content */}
            {/*  */}
          </divAJDAOS>
        </Content>

        {/*Blog Post Start */}
        <section
          style={{
            backgroundColor: "white",
            padding: "20px",
          }}
        >
          <figure
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap", // Allow wrapping of elements
            }}
          >
            {teamMembers.map((member, index) => {
              if (filterContent(member.name)) {
                return (
                  <motion.figure
                    whileHover={{ scale: 1.05 }}
                    key={index}
                    style={{
                      textAlign: "center",
                      position: "relative",
                      boxShadow: "0px 5px 10px rgba(0, 135, 184, 0.5)",
                      width: "100%",
                      maxWidth: "500px",
                      borderRadius: "20px",
                      margin: "10px", // Add margin for spacing when stacked
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: "100%",
                        maxWidth: "500px",
                        marginBottom: "10px",
                        borderRadius: "10px",
                        transition: "transform 0.3s ease-in-out",
                      }}
                      className={HoverStyles}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "#d1e4e8",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        marginBottom: "20px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        color: "#61999c",
                        fontWeight: "bold",
                      }}
                    >
                      {member.category}
                    </div>
                    <figcaption
                      style={{
                        color: "#011126",
                        fontFamily: "'Spline Sans', sans-serif",
                        fontWeight: "bold",
                        textAlign: "left",
                        marginLeft: "10px",
                        lineHeight: "1.5",
                      }}
                    >
                      {member.name}
                    </figcaption>
                    <figcaption
                      style={{
                        color: "#4A6B8A",
                        fontFamily: "'Spline Sans', sans-serif",
                        fontWeight: "bold",
                        textAlign: "left",
                        marginLeft: "10px",
                        lineHeight: "1.5",
                      }}
                    >
                      Authors:
                    </figcaption>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center", // Align to the left
                        backgroundColor: "#d1e4e8",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        marginTop: "10px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        color: "#61999c",
                        fontWeight: "bold",
                        maxWidth: "200px", // Set max width to 200px
                      }}
                    >
                      {member.author}
                    </div>
                    <figcaption
                      style={{
                        color: "#4A6B8A",
                        fontFamily: "'Spline Sans', sans-serif",
                        fontWeight: "bold",
                        textAlign: "left",
                        marginLeft: "10px",
                        lineHeight: "1.5",
                      }}
                    >
                      Education:
                    </figcaption>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center", // Align to the left
                        backgroundColor: "#d1e4e8",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        marginTop: "10px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        color: "#61999c",
                        fontWeight: "bold",
                        maxWidth: "200px", // Set max width to 200px
                      }}
                    >
                      {member.education}
                    </div>
                    <figcaption
                      style={{
                        color: "black",
                        fontFamily: "'Spline Sans', sans-serif",
                        textAlign: "left",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                    >
                      {member.description}
                    </figcaption>
                    {/* Add button */}
                    <button
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "#d1e4e8",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        marginBottom: "20px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        color: "#61999c",
                        fontWeight: "bold",
                        zIndex: "10000",
                      }}
                    >
                      <a href={member.link} target="_blank">
                        Read Full Paper
                      </a>
                    </button>
                  </motion.figure>
                );
              } else {
                return null;
              }
            })}
          </figure>
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
    top: -100px;
    height: 100px;
    right: 0;
    // z-index: 1;
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
