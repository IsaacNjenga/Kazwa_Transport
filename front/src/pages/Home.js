import Motion from "../components/Motion";
import { Card, Col, Divider, Image, Row, Typography } from "antd";
import { useUser } from "../contexts/UserContext";
import {
  AppstoreOutlined,
  BankFilled,
  BankOutlined,
  CheckCircleOutlined,
  GlobalOutlined,
  HomeFilled,
  InfoCircleOutlined,
  ProductFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Text, Paragraph } = Typography;

const bannerImg =
  "https://plus.unsplash.com/premium_photo-1682144324433-ae1ee89a0238?w=900";

const aboutImg =
  "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=900";

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

const iconStyle = {
  fontSize: 30,
  margin: 0,
  padding: 8,
  color: "#1890ff",
  borderRadius: 50,
  border: "2px solid #1890ff",
  background: "whitesmoke",
};

const servicesCard = [
  {
    id: 1,
    icon: <BankFilled style={iconStyle} />,
    title: "Construction Transport",
    text: "Specialized transportation for construction equipment, machinery and materials to any site across the UAE.",
  },
  {
    id: 2,
    icon: <ShoppingCartOutlined style={iconStyle} />,
    title: "Commercial Goods Transport",
    text: "Secure and timely transportation of commercial goods, ensuring your products reach their destination safely.",
  },
  {
    id: 3,
    icon: <ProductFilled style={iconStyle} />,
    title: "Logistics Companies Transport (JAFZA)",
    text: "Specialized transportation for construction equipment, machinery and materials to any site across the UAE.",
  },
  {
    id: 4,
    icon: <HomeFilled style={iconStyle} />,
    title: "Other Businesses We Serve",
    text: "Customized transportation solutions for various industries inclding manufacturing, retail and more.",
  },
];

const whyData = [
  {
    id: 1,
    icon: <BankOutlined style={iconStyle} />,
    title: "Versatile Fleet & Fast Dispatch",
    text: "Our reliable pickup fleet in Dubai can handle any transport need with quick dispatch and secure dellivery across the UAE.",
  },
  {
    id: 2,
    icon: <InfoCircleOutlined style={iconStyle} />,
    title: "Seamless Operations in JAFZA",
    text: "With our pickup transport services in UAE, we ensure smooth efficient, and fully compliant deliveris for businesses across Dubai and beyond.",
  },
  {
    id: 3,
    icon: <AppstoreOutlined style={iconStyle} />,
    title: "Backed by Sea Prince Logistics",
    text: "As a leading pickup transport company in Dubai, we bring proven expertise and dependable service for all your logistics needs.",
  },
];

function Home() {
  const { isMobile } = useUser();

  return (
    <Motion>
      {/* banner */}
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

      {/* services */}
      <div style={{ marginBottom: 50, padding: 10 }}>
        <Title style={{ textAlign: "center", fontFamily: "Raleway" }}>
          OUR SERVICES
        </Title>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Raleway",
              fontWeight: 600,
              marginBottom: 20,
            }}
            type="secondary"
          >
            We provide comprehensive transportation solutions for heavy vehicles
            and equipment across the UAE
          </Text>
        </div>

        <div style={{ margin: "10px 40px", padding: 20 }}>
          <Row gutter={[16, 16]}>
            {servicesCard.map((card) => (
              <Col xs={24} sm={12} md={6} key={card.id}>
                <Card
                  hoverable
                  style={{
                    height: 300,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                    borderRadius: 12,
                  }}
                >
                  <p style={{ textAlign: "center" }}>{card.icon}</p>
                  <div
                    style={{
                      display: "flex",
                      height: 70,
                    }}
                  >
                    <Title
                      style={{
                        fontFamily: "Raleway",
                        fontSize: 20,
                        flex: 1,
                        marginBottom: 10,
                      }}
                    >
                      {card.title}
                    </Title>
                  </div>
                  <div
                    style={{
                      marginBottom: 5,
                      fontFamily: "Raleway",
                      fontWeight: 500,
                    }}
                  >
                    <Text type="secondary">{card.text}</Text>
                  </div>
                  <div
                    style={{ position: "absolute", bottom: 10, marginTop: 0 }}
                  >
                    <Link to="/quotation">
                      <p
                        style={{
                          fontWeight: "bold",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.05)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      >
                        Request Service →
                      </p>
                    </Link>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* why us? */}
      <div style={{ marginTop: 30, padding: 10, marginBottom: 20 }}>
        {isMobile ? (
          <Title style={{ textAlign: "center", fontFamily: "Raleway" }}>
            WHY CHOOSE US?
          </Title>
        ) : (
          <Divider
            style={{
              borderColor: "#333",
              padding: "0 30px",
              margin: 0,
              textAlign: "center",
            }}
          >
            <Title style={{ textAlign: "center", fontFamily: "Raleway" }}>
              WHY CHOOSE US?
            </Title>
          </Divider>
        )}
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Raleway",
              fontWeight: 600,
              marginBottom: 20,
            }}
            type="secondary"
          >
            We provide trusted pickup transport in Dubai with reliable service,
            strategic location, and a strong commitment to customer satisfaction
          </Text>
        </div>

        <div style={{ margin: "10px 40px", padding: 20 }}>
          <Row gutter={[16, 16]}>
            {whyData.map((d) => (
              <Col xs={24} sm={12} md={8} key={d.id}>
                <Card
                  hoverable
                  style={{
                    height: "auto",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                    borderRadius: 12,
                    padding: isMobile ? 0 : 10,
                  }}
                >
                  <p style={{ textAlign: "center" }}>{d.icon}</p>
                  <div style={{ height: isMobile ? 90 : 60 }}>
                    <Title
                      level={3}
                      style={{
                        textAlign: "center",
                        fontFamily: "Raleway",
                      }}
                    >
                      {d.title}
                    </Title>
                  </div>
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "Roboto",
                    }}
                  >
                    {d.text}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* about us */}
      <div style={{ padding: "20px 32px", background: "whitesmoke" }}>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 15,
            justifyContent: "space-around",
          }}
        >
          <div style={{ width: isMobile ? "100%" : "60%", padding: 20 }}>
            <Title
              style={{
                fontFamily: "Raleway",
                textAlign: isMobile ? "center" : "left",
                fontWeight: 800,
              }}
            >
              About Us
            </Title>
            <Paragraph
              style={{
                fontFamily: "Roboto",
                fontSize: 20,
                textAlign: "justify",
              }}
            >
              We are a trusted pickup transport company with over 24 years of
              experience, serving Dubai and the UAE. We provide reliable 1-ton
              and 3-ton pickup rentals for businesses and individuals, handling
              electronics, heavy goods, and construction materials with a focus
              on quality, safety, and professionalism. Our services are
              affordable, timely, and customer-focused — ideal for retailers,
              wholesalers, and corporate clients seeking hassle-free logistics,
              cargo pickup, or household transport.
            </Paragraph>
            <div
              style={{
                display: "flex",
                gap: 20,
                fontFamily: "Raleway",
                fontWeight: "bold",
                fontSize: 22,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>
                <CheckCircleOutlined style={{ fontSize: 26, color: "green" }} />{" "}
                29+ Years Experience
              </span>
              <span>
                <GlobalOutlined style={{ fontSize: 26, color: "#1890ff" }} />{" "}
                UAE-Wide Coverage
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Image
              src={aboutImg}
              alt="img_"
              preview={false}
              height={480}
              width={520}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: 50,
              }}
            />
          </div>
        </div>
      </div>
    </Motion>
  );
}

export default Home;
