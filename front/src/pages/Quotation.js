import React from "react";
import { useUser } from "../contexts/UserContext";
import {
  Button,
  Card,
  Carousel,
  Col,
  Divider,
  Image,
  Row,
  Space,
  Typography,
} from "antd";
import { motion } from "framer-motion";
import Motion from "../components/Motion";

const { Title, Text, Paragraph } = Typography;
const img =
  "https://images.pexels.com/photos/2449454/pexels-photo-2449454.jpeg";

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

function Quotation() {
  const { isMobile } = useUser();
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
                  fontSize: isMobile ? 36 : 60,
                  marginBottom: 0,
                }}
              >
                GET YOUR QUOTATION
              </Title>
            </motion.div>
            <Text
              style={{
                marginTop: 0,
                color: "#fff",
                fontFamily: "Raleway",
                fontWeight: 400,
                textAlign: "left",
                fontSize: isMobile ? 18 : 28,
              }}
            >
              Ready to Book? Let’s Get Started
            </Text>
          </div>
        </div>
      </div>
    </Motion>
  );
}

export default Quotation;
