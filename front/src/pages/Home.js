import Motion from "../components/Motion";
import { Image, Typography } from "antd";
import { useUser } from "../contexts/UserContext";

const { Title, Text, Paragraph } = Typography;
const bannerImg =
  "https://plus.unsplash.com/premium_photo-1682144324433-ae1ee89a0238?w=900";

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

function Home() {
  const { isMobile } = useUser();

  return (
    <Motion>
      <div style={{ position: "relative" }}>
        <Image
          src={bannerImg}
          alt="bgImg"
          width="100%"
          height={isMobile ? 600 : 700}
          preview={false}
          style={{ objectFit: "cover", maxWidth: "100%" }}
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
              Reliable Pickup Transport Services Across Dubai & UAE On-Demand
            </Title>
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
              Trusted pickup truck rental and delivery in Dubai, offering
              fast,secure and professional goods transport solutions for
              businesses and individuals
            </Text>
          </div>
        </div>
      </div>
    </Motion>
  );
}

export default Home;
