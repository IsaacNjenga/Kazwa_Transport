import React from "react";
import Motion from "../components/Motion";
import { useUser } from "../contexts/UserContext";
import { Card, Col, Image, Row, Typography } from "antd";
import { motion } from "framer-motion";

const { Title, Text, Paragraph } = Typography;

const bannerDiv = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(to top ,rgba(0,0,0,0.54) 0%, rgba(0,0,0,0.15) 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  color: "#fff",
  padding: "0 20px",
};

function About() {
  const { isMobile } = useUser();
  const img =
    "https://images.pexels.com/photos/12267889/pexels-photo-12267889.jpeg";
  return (
    <Motion>
      <div style={{ position: "relative" }}>
        <Image
          src={img}
          alt="bgImg"
          width="100%"
          height={isMobile ? 400 : 800}
          preview={false}
          style={{
            objectFit: "cover",
            maxWidth: "100%",
          }}
        />
        <div style={bannerDiv}>
          <div
            style={{
              position: "absolute",
              left: 0,
              width: isMobile ? "90%" : "65%",
              margin: isMobile ? "0 20px" : "0 36px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Title
                style={{
                  color: "#fff",
                  fontFamily: "Raleway",
                  textAlign: "left",
                  fontWeight: 700,
                  letterSpacing: 2,
                  fontSize: isMobile ? 32 : 50,
                  marginBottom: 0,
                }}
              >
                ABOUT US
              </Title>
            </motion.div>
          </div>
        </div>
      </div>

      <div>
        <Title
          style={{
            fontFamily: "Raleway",
            fontWeight: 800,
            textAlign: "center",
            marginTop: 40,
          }}
        >
          Moving UAE Forward, One Pickup at a Time
        </Title>
        <Paragraph
          style={{
            fontFamily: "Roboto",
            textAlign: "center",
            width: isMobile ? 400 : 700,
            margin: "0 auto",
            fontSize: 18,
            marginBottom: 20,
            padding: 10,
          }}
          type="secondary"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          lobortis justo, ut iaculis nulla. Donec varius magna ut turpis luctus
          aliquet. Nulla mauris eros, molestie non commodo eget, molestie ut
          nibh. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Duis porttitor augue nibh, ut molestie
          tortor interdum vel. Aenean volutpat ultrices eros, non sodales lectus
          ultrices eu. Nullam scelerisque arcu lacus, at porttitor ex vestibulum
          semper. Phasellus luctus luctus facilisis. Vestibulum auctor ante
          velit, at sollicitudin tellus placerat qui.
        </Paragraph>
      </div>

      <div
        style={{
          marginTop: 0,
          padding: 10,
          marginBottom: 0,
          background:
            'url("https://images.pexels.com/photos/11087830/pexels-photo-11087830.jpeg") center center no-repeat fixed',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Card
          style={{
            background: "rgba(241, 234, 234, 0.91)",
            border: "none",
            textAlign: "center",
            margin: "40px auto",
            width: isMobile ? "100%" : "70%",
            padding: 20,
            height: "auto",
          }}
        >
          <Title
            style={{
              fontFamily: "Raleway",
              fontWeight: 800,
              textAlign: "center",
              marginTop: 0,
              fontSize: isMobile ? 30 : 40,
            }}
          >
            Since 1998
          </Title>
          <div
            style={{
              display: isMobile ? "block" : "flex",
              justifyContent: "space-between",
              gap: 40,
            }}
          >
            <div>
              <Paragraph
                style={{
                  textAlign: "left",
                  marginBottom: 0,
                  fontFamily: "Roboto",
                  fontSize: 20,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu velit rutrum, dignissim neque quis, venenatis nunc. Aliquam
                sodales neque quis arcu lacinia, in egestas metus semper. Mauris
                convallis lobortis ultrices. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Morbi eu velit rutrum, dignissim
                neque quis, venenatis nunc. Aliquam sodales neque quis arcu
                lacinia, in egestas metus semper. Mauris convallis.
              </Paragraph>
            </div>
            <div>
              <Paragraph
                style={{
                  textAlign: "left",
                  marginBottom: 0,
                  fontFamily: "Roboto",
                  fontSize: 20,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu velit rutrum, dignissim neque quis, venenatis nunc. Aliquam
                sodales neque quis arcu lacinia, in egestas metus semper. Mauris
                convallis lobortis ultrices. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Morbi eu velit rutrum, dignissim
                neque quis, venenatis nunc. Aliquam sodales neque quis arcu
                lacinia, in egestas metus semper. Mauris convallis
              </Paragraph>
            </div>
          </div>
        </Card>
      </div>
    </Motion>
  );
}

export default About;
