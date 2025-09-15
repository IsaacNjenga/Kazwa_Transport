import React from "react";
import Motion from "../components/Motion";
import { useUser } from "../contexts/UserContext";
import { Image, Typography } from "antd";

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
          </div>
        </div>
      </div>
    </Motion>
  );
}

export default About;
