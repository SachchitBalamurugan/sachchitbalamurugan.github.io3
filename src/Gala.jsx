import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Logo from "./images/logoYOTIf.png";
import involve from "./images/involve.png";
import React, { useRef, useState } from "react";
import TrashV from "./images/TrashV.png";
import PartyV from "./images/PartyV.png";
import FishV from "./images/FishV.png";
import { motion } from "framer-motion";
import Bar from "./images/bar.png";
import Underwater from "./images/Underwater.png";
import Suit from "./images/Suit.jpg";
import Bus from "./images/Bus.png";
import Dance from "./images/Dance.png";
import Auction from "./images/Auction.jpg";
import Guest from "./images/GuestS.png";

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

export default function Gala() {
  const text = " Empowering Youth Through Technology Education";

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
          scene="https://prod.spline.design/hulZnYDv2SZxrZLV/scene.splinecode"
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
              src={Bar}
              alt="Logo"
              onClick={toggleMenu}
              style={{ position: "absolute", top: "0px", left: "10px" }}
              // Adjust positioning as needed
            />
            <Image3
              src={Logo}
              alt="Logo"
              onClick={toggleMenu}
              // Adjust positioning as needed
            />
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="./AboutUs">About Us</a>
            </li>
            
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/clients">Past Clients</a>
            </li>
            <li>
              <a href="/involve">Get Involved</a>
            </li>
            <li>
              <a href="/mentor">Mentorship</a>
            </li>
          </Menu>

          <h1 style={{ zIndex: -1 }}>Gala</h1>
          <p>
            The YOTI Gala is more than just an evening of celebration; it is a
            testament to the power of collaboration. We are honored to work
            alongside a diverse range of non-profit organizations and community
            partners who share our vision of a digitally inclusive world.
            Together, we build accessible, impactful online platforms that not
            only enhance the missions of these organizations but also provide
            invaluable real-world experience for aspiring young tech
            enthusiasts.
          </p>
          <button>
            <img
              src={involve}
              alt="involve"
              style={{ width: "30px", height: "30px" }}
            />
            Get Involved Now
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
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={headingVariants}
              style={{
                fontFamily: "'Spline Sans', sans-serif",
                fontSize: "5vw",
                margin: "0", // Reset margin
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
                marginBottom: "-90px",
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
                marginBottom: "0px",

                margin: "-10px 0", // Add margin for spacing
              }}
            >
              "At YOTI, we believe in unlocking the potential of every young
              individual, guiding them towards a brighter future in the
              ever-evolving world of technology."
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
              - Sachchit Balamurugan (Founder and CEO of YOTI)
            </motion.p>
          </divNEW>
          <section
            style={{
              backgroundColor: "#F1F1F1",
              padding: "20px",
              margin: "-40px 0",
              zIndex: 2,
            }}
          >
            <h1
              style={{
                color: "#61999c",
                fontWeight: "bold",
                textAlign: "center", // Center horizontally
                margin: "20px auto", // Center vertically and horizontally with top and bottom margin
                maxWidth: "80%", // Limit width to maintain readability on larger screens
                fontSize: "clamp(2rem, 8vw, 3.5rem)", // Responsive font size
              }}
            >
              Event Information
            </h1>
            <figure
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              {/* Image 1 */}
              <motion.figure
                whileHover={{ scale: 1.15 }}
                style={{
                  textAlign: "center",
                  position: "relative",
                  backgroundColor: "white",
                  width: "100%",
                  maxWidth: "320px",
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
                  DATE
                </figcaption>
                <figcaption
                  style={{
                    color: "#61999c",
                    fontFamily: "'Spline Sans', sans-serif",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  07/03/2024
                </figcaption>
              </motion.figure>
              {/* Image 2 */}
              <motion.figure
                whileHover={{ scale: 1.15 }}
                style={{
                  textAlign: "center",
                  position: "relative",
                  width: "100%",
                  maxWidth: "320px", // Set the width to 500px
                  height: "100px", // Set the height to 500px
                  borderRadius: "20px",
                  backgroundColor: "white",
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
                  TIME
                </figcaption>
                <figcaption
                  style={{
                    color: "#61999c",
                    fontFamily: "'Spline Sans', sans-serif",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  7 PM
                </figcaption>
              </motion.figure>
              {/* Image 3 */}
              <motion.figure
                whileHover={{ scale: 1.15 }}
                style={{
                  textAlign: "center",
                  position: "relative",
                  width: "100%",
                  maxWidth: "320px",
                  height: "100px", // Set the height to 500px
                  borderRadius: "20px",
                  backgroundColor: "white",
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
                  LOCATION
                </figcaption>
                <figcaption
                  style={{
                    color: "#61999c",
                    fontFamily: "'Spline Sans', sans-serif",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  1234 Trial Dr, Dickerson, Tx
                </figcaption>
              </motion.figure>
            </figure>
          </section>
          {/*Main Content*/}
        </Content>
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
          <motion.img
            initial={{ opacity: 0, transform: "translate(-20px, 20px)" }}
            animate={{}}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, transform: "translate(0px, 0px)" }}
            src={Dance} // Replace with your image URL
            alt="Sample Image"
            style={{
              marginTop: "50px",
              width: "100%",
              maxWidth: "350px",
              height: "100%",
              maxHeight: "350px",
              marginRight: "20px",
              borderRadius: "10%", // Make the image rounded
            }}
          />
          {/* Content on the right */}
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3.5 }}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "clamp(2rem, 8vw, 4.5rem)", // Responsive font size
                color: "#264878ff", // Adjusted color with alpha channel

                textAlign: "center", // Center horizontally
              }}
            >
              Entertainment
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3.5 }}
              style={{
                fontSize: "18px",
                color: "#264878ff",
                width: "100%",
                maxWidth: "500px",
              }}
            >
              Prepare to be captivated by an enchanting evening of dance and
              delight at the YOTI Gala. Our entertainment program features a
              mesmerizing performance by renowned dance troupe, DANCE Labels,
              whose dynamic choreography and artistic expression promise to
              leave you spellbound. From contemporary dance to traditional
              rhythms, their performance will celebrate the diversity and
              creativity that lie at the heart of our mission. As we honor the
              achievements of our young tech enthusiasts, let the rhythm and
              movement of the night inspire us all to continue bridging the
              digital divide and empowering the next generation.
            </motion.p>
          </div>
        </div>
        {/*More Content*/}
        <div
          style={{
            height: "500px",
            backgroundImage:
              "url('https://images.dailyhive.com/20171027090924/Untitled-design-67.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Content on the right */}
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center", // Center the content
            }}
          >
            <motion.h2
              initial={{ opacity: 0, transform: "translate(-20px, 20px)" }}
              animate={{}}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, transform: "translate(0px, 0px)" }}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "clamp(3rem, 10vw, 5rem)", // Responsive font size
                color: "white",
                margin: "-50px 0",
                textAlign: "center", // Center horizontally
              }}
            >
              Join Us for the Biggest Fundraiser Gala in the World!
            </motion.h2>
          </div>
        </div>
        {/*Entertainment*/}
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
          <motion.img
            initial={{ opacity: 0, transform: "translate(-20px, 20px)" }}
            animate={{}}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, transform: "translate(0px, 0px)" }}
            src={Bus} // Replace with your image URL
            alt="Sample Image"
            style={{
              marginTop: "50px",
              width: "100%",
              maxWidth: "350px",
              height: "100%",
              maxHeight: "350px",
              marginRight: "20px",
              borderRadius: "10%", // Make the image rounded
            }}
          />
          {/* Content on the right */}
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3.5 }}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "clamp(2rem, 8vw, 3.5rem)", // Responsive font size
                color: "#264878ff", // Adjusted color with alpha channel
                width: "100%",
                maxWidth: "200px",
                textAlign: "left", // Center horizontally
              }}
            >
              Transportation and Accommodations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3.5 }}
              style={{
                fontSize: "18px",
                color: "#264878ff",
                width: "100%",
                maxWidth: "500px",
                marginBottom: "100px",
              }}
            >
              For your convenience, the YOTI Gala offers several transportation
              options. Complimentary valet parking and nearby self-parking at
              [Parking Garage Address] are available. Public transportation is
              accessible, with the "Superway" subway station and various bus
              routes nearby. Ride-sharing services like Uber and Lyft are also a
              hassle-free option. Guests staying at [Hotel Name] can take
              advantage of a complimentary shuttle service running every 30
              minutes starting at 7:00 am, with the last shuttle departing at
              [End 11.30 pm. The venue is fully accessible, and any special
              assistance needs can be arranged by contacting us at [Contact
              Information]. We look forward to welcoming you!
            </motion.p>
          </div>
        </div>
        {/*Guest Speaker Content*/}
        <section
          style={{
            backgroundColor: "#F1F1F1",
            padding: "20px",
            margin: "-40px 0",
          }}
        >
          <h1
            style={{
              color: "#61999c",
              fontWeight: "bold",
              textAlign: "center", // Center horizontally
              margin: "auto", // Center vertically
              margin: "20px 300px",
            }}
          >
            Guest Speakers
          </h1>
          <figure
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {/* Image 1 */}

            {/* Image 2 */}
            <figure
              style={{
                textAlign: "center",
                position: "relative",
                boxShadow: "0px 5px 10px rgba(0, 135, 184, 0.5)", // Shadow style
                width: "320px", // Set the width to 500px
                height: "100%", // Set the height to 500px
                borderRadius: "20px",
              }}
            >
              <img
                src={Guest}
                alt="Image 2"
                style={{
                  width: "100%",
                  margin: "25px 0",
                  maxWidth: "250px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  transition: "transform 0.3s ease-in-out",
                }}
                className={HoverStyles}
              />
              <figcaption
                style={{
                  color: "#61999c",
                  fontFamily: "'Spline Sans', sans-serif",
                  fontWeight: "bold",
                  textAlign: "left",
                  fontSize: "21px",
                  margin: "0 30px",
                }}
              >
                Jane Smith
              </figcaption>
              <figcaption
                style={{
                  color: "#61999c",
                  fontFamily: "'Spline Sans', sans-serif",
                  textAlign: "left",
                  margin: "5px 30px",
                }}
              >
                Jane Smith is an accomplished technology entrepreneur recognized
                for her visionary leadership and transformative impact in the
                tech startup ecosystem. With a background in computer science
                and business administration, Jane co-founded TechVision, a
                pioneering startup specializing in artificial intelligence
                solutions for healthcare and biotechnology sectors. Under her
                leadership as CEO, TechVision has rapidly grown to become a
                market leader, disrupting traditional approaches with innovative
                AI-driven platforms that optimize patient care and medical
                research outcomes. Jane is passionate about harnessing
                technology to address global challenges and empower
                organizations to achieve sustainable growth and societal impact.
              </figcaption>
            </figure>
            {/* Image 3 */}
            <figure
              style={{
                textAlign: "center",
                position: "relative",
                boxShadow: "0px 5px 10px rgba(0, 135, 184, 0.5)", // Shadow style
                width: "320px", // Set the width to 500px
                height: "100%", // Set the height to 500px
                borderRadius: "20px",
              }}
            >
              <img
                src={Guest}
                alt="Image 3"
                style={{
                  width: "100%",
                  margin: "25px 0",
                  maxWidth: "250px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  transition: "transform 0.3s ease-in-out",
                }}
                className={HoverStyles}
              />
              <figcaption
                style={{
                  color: "#61999c",
                  fontFamily: "'Spline Sans', sans-serif",
                  fontWeight: "bold",
                  textAlign: "left",
                  fontSize: "21px",
                  margin: "0 30px",
                }}
              >
                Michael Johnson
              </figcaption>
              <figcaption
                style={{
                  color: "#61999c",
                  fontFamily: "'Spline Sans', sans-serif",
                  textAlign: "left",
                  margin: "5px 30px",
                }}
              >
                Michael Johnson is a visionary technology strategist with a
                proven track record of driving digital transformation across
                diverse industries. As Chief Innovation Officer at GlobalTech
                Innovations, Michael leads the development and implementation of
                cutting-edge technologies, including blockchain and IoT
                solutions, to revolutionize supply chain management and
                logistics. With a background in engineering and
                entrepreneurship, Michael co-founded TechFusion, a startup
                focused on sustainable energy solutions, where he pioneered
                innovative smart grid technologies that optimize energy
                distribution and consumption. Michael is dedicated to leveraging
                technology to create sustainable and scalable solutions that
                address pressing global challenges and drive economic growth.
              </figcaption>
            </figure>
          </figure>
        </section>
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
          <motion.img
            initial={{ opacity: 0, transform: "translate(20px, -20px)" }}
            animate={{}}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, transform: "translate(0px, 0px)" }}
            src={Suit} // Replace with your image URL
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
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3.5 }}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "clamp(3rem, 10vw, 5rem)", // Responsive font size
                color: "#61999c",

                textAlign: "left", // Center horizontally
              }}
            >
              Dress Code
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3.5 }}
              style={{
                fontSize: "18px",
                color: "#61999c",
                marginRight: "10px",
                width: "100%",
                maxWidth: "500px",
                textAlign: "left",
              }}
            >
              Our gala event promises an evening of elegance and celebration,
              and as such, we kindly request attendees to adhere to a formal
              dress code. We encourage gentlemen to wear tuxedos or dark suits
              paired with dress shoes. For ladies, evening gowns or cocktail
              dresses complemented by appropriate formal footwear are
              recommended. Your attire will add to the grandeur of the occasion,
              ensuring a sophisticated ambiance befitting our gala's purpose. We
              look forward to welcoming you in your finest attire as we come
              together for an unforgettable evening of festivities and
              meaningful connections.
            </motion.p>
          </div>
        </div>
        {/*Sponsors Content*/}
        <section
          style={{
            backgroundColor: "#F1F1F1",
            padding: "20px",
            margin: "0 0",
          }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3.5 }}
            style={{
              color: "#61999c",
              fontWeight: "bold",
              textAlign: "center", // Center horizontally

              fontSize: "40px",
            }}
          >
            Sponsors
          </motion.h1>
          <figure
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {/* Image 1 */}
            <figure
              style={{
                textAlign: "center",
                position: "relative",
                width: "260px", // Set the width to 500px
                height: "300px", // Set the height to 500px
                borderRadius: "20px", // Add border-radius for rounded corners
              }}
            >
              <motion.img
                initial={{ opacity: 0, transform: "translate(-20px, 20px)" }}
                animate={{}}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, transform: "translate(0px, 0px)" }}
                src="https://www.pngall.com/wp-content/uploads/13/Burger-King-Logo-PNG-Images.png"
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
            </figure>
            {/* Image 2 */}
            <figure
              style={{
                textAlign: "center",
                position: "relative",
                width: "260px", // Set the width to 500px
                height: "300px", // Set the height to 500px
                borderRadius: "20px",
              }}
            >
              <motion.img
                initial={{ opacity: 0, transform: "translate(-20px, 20px)" }}
                animate={{}}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, transform: "translate(0px, 0px)" }}
                src="https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png"
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
            </figure>
            {/* Image 3 */}
            <figure
              style={{
                textAlign: "center",
                position: "relative",
                width: "260px", // Set the width to 500px
                height: "300px", // Set the height to 500px
                borderRadius: "20px",
              }}
            >
              <motion.img
                initial={{ opacity: 0, transform: "translate(-20px, 20px)" }}
                animate={{}}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, transform: "translate(0px, 0px)" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
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
            </figure>
          </figure>
        </section>
        {/*Silent Auction*/}
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
          <motion.img
            initial={{ opacity: 0, transform: "translate(-20px, 20px)" }}
            animate={{}}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, transform: "translate(0px, 0px)" }}
            src={Auction} // Replace with your image URL
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
                maxWidth: "500px",
                textAlign: "left", // Center horizontally
              }}
            >
              Auction and Raffle
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
              Join us at our gala where we will host an exciting raffle and
              auction. The raffle features exclusive prizes generously donated
              by sponsors, with tickets available for purchase throughout the
              event to support our mission of empowering youth through
              technology education. Our live and silent auctions showcase a
              variety of sought-after items and experiences, from luxurious
              getaways to unique artworks, providing opportunities for attendees
              to bid and win while contributing to our vital programs. Your
              participation in these events not only enhances the gala
              experience but also directly impacts the lives of young
              individuals striving to excel in the tech industry.
            </p>
          </div>
        </div>
        <div2
          style={{
            height: "100%",
            backgroundColor: "#61999c",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            zIndex: 2,

            padding: "20px", // Adding padding for better spacing
          }}
        >
          {/* Image on the left */}
          <iframe
            style={{ width: "100%", maxWidth: "500px", zIndex: 1000000 }}
            src="https://docs.google.com/forms/d/e/1FAIpQLSe-uLSQu652LLbGtYZWHOzB4LR9by_g-WNRkYONNlY6vdSXAQ/viewform?usp=sf_link"
            height="448"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
          {/* Content on the right */}
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3.5 }}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "clamp(3rem, 8vw, 4rem)", // Responsive font size
                color: "white",
                marginTop: "50px",
                width: "100%",
                maxWidth: "300px",
                // Adjusted margin for spacing
                textAlign: "left", // Center horizontally
              }}
            >
              Purchase Tickets
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3.5 }}
              style={{
                fontSize: "18px",
                color: "white",

                width: "100%",
                maxWidth: "500px",
              }}
            >
              To purchase tickets for our gala's raffle and auction, please fill
              out the form provided here. We offer a variety of ticket options
              tailored to suit your preferences and support our cause. Choose
              from packages such as the Basic Option (No Dinner) for $9.99,
              Dinner only for $30.00, or the Dinner + 3 Raffles package for
              $50.00. Your participation ensures an evening of excitement and
              generosity, directly benefiting our efforts to empower youth
              through technology education.
            </motion.p>
          </div>
        </div2>
        <div2
          style={{
            height: "100%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            zIndex: 2,

            padding: "20px", // Adding padding for better spacing
          }}
        >
          {/* Image on the left */}
          <iframe
            style={{ width: "100%", maxWidth: "500px", zIndex: 1000000 }}
            src="https://docs.google.com/forms/d/e/1FAIpQLSfoPtLp4EY3gkEl-b-p6meuOlctv0ZywxsFDGVKKUAJ5bEURw/viewform?usp=sf_link"
            height="448"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
          {/* Content on the right */}
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3.5 }}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "clamp(3rem, 8vw, 4rem)", // Responsive font size
                color: "#61999c",
                marginTop: "50px",
                width: "100%",
                maxWidth: "300px",
                // Adjusted margin for spacing
                textAlign: "left", // Center horizontally
              }}
            >
              Donate
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3.5 }}
              style={{
                fontSize: "18px",
                color: "#61999c",

                width: "100%",
                maxWidth: "500px",
              }}
            >
              Support our mission of empowering youth through technology
              education by making a donation to our organization. Your generous
              contributions enable us to provide essential resources,
              mentorship, and educational opportunities to young individuals
              eager to excel in the tech industry. Every donation makes a
              meaningful impact, helping us bridge the digital divide and
              nurture the next generation of innovators. Join us in creating a
              brighter future by donating today. Together, we can make a
              difference in the lives of youth and communities worldwide.
            </motion.p>
          </div>
        </div2>
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

const div2 = styled.nav`
  display: flex;
  gap: 10px;
  z-index: 2;

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
    height: 100px;
    margin: 0;
    top: 110px;
    right: -100px;
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
  @media (min-width: 769px) {
    display: none;
  }
`;

const Image3 = styled.img`
  z-index: 10000000000000000000000000000;
  cursor: pointer;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  /* Add additional styles for your image here */
`;
