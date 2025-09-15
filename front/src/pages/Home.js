import Motion from "../components/Motion";
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
import { useUser } from "../contexts/UserContext";
import {
  CheckCircleOutlined,
  FormOutlined,
  GlobalOutlined,
  MailOutlined,
  MessageFilled,
  PhoneFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { servicesCard, whyData } from "../assets/data/data";

const { Title, Text, Paragraph } = Typography;

const bannerImg =
  "https://plus.unsplash.com/premium_photo-1682144324433-ae1ee89a0238?w=900";
const bannerImg2 =
  "https://plus.unsplash.com/premium_photo-1661963219843-f1a50a6cfcd3?w=900";
const bannerImg3 =
  "https://images.unsplash.com/photo-1707555235858-feea68bb1cc5?w=900";
const bannerImg4 =
  "https://plus.unsplash.com/premium_photo-1661935334659-a4f95e515c3b?w=900";
const bannerImg5 =
  "https://images.pexels.com/photos/33462124/pexels-photo-33462124.jpeg";

const bannerImages = [
  bannerImg,
  bannerImg2,
  bannerImg3,
  bannerImg4,
  bannerImg5,
];

const aboutImg =
  "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=900";

const whyUsImg =
  "https://images.pexels.com/photos/11087830/pexels-photo-11087830.jpeg";

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
      {/* banner */}
      <div style={{ position: "relative" }}>
        <Carousel
          autoplay
          autoplaySpeed={4800}
          dots={false}
          effect="scrollx"
          style={{ width: "100%" }}
        >
          {bannerImages.map((img) => (
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
          ))}
        </Carousel>
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
      <div
        style={{
          marginBottom: 0,
          padding: 10,
          background: `url(${whyUsImg}) center center no-repeat fixed`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Title
          style={{ textAlign: "center", fontFamily: "Raleway", color: "#fff" }}
        >
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
              color: "#fff",
              fontSize: 20,
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
                    background: "rgba(0,0,0,0.3)",
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
                      marginBottom: 10,
                      fontFamily: "Raleway",
                      fontWeight: 500,
                    }}
                  >
                    <Text type="secondary">{card.text}</Text>
                  </div>
                  <div style={{ position: "absolute", bottom: 2 }}>
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
      <div
        style={{
          marginTop: 0,
          padding: 10,
          marginBottom: 0,
          background:
            'url("https://images.pexels.com/photos/29148060/pexels-photo-29148060.jpeg") center center no-repeat fixed',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {isMobile ? (
          <Title
            style={{
              textAlign: "center",
              fontFamily: "Raleway",
              color: "#fff",
            }}
          >
            WHY CHOOSE US?
          </Title>
        ) : (
          <Divider
            style={{
              borderColor: "#ffffffff",
              padding: "0 30px",
              margin: 0,
              textAlign: "center",
            }}
          >
            <Title
              style={{
                textAlign: "center",
                fontFamily: "Raleway",
                color: "#fff",
              }}
            >
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
              color: "#fff",
              fontSize: 20,
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
      <div
        style={{
          padding: "20px 32px",
          background:
            'url("https://images.pexels.com/photos/29148060/pexels-photo-29148060.jpeg") center center no-repeat fixed',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 15,
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              width: isMobile ? "100%" : "60%",
              padding: isMobile ? 8 : 15,
              background:
                "linear-gradient(to top ,rgba(0, 0, 0, 0.15) 40%, rgba(0, 0, 0, 0.33) 100%)",
              borderRadius: 12,
            }}
          >
            <Title
              style={{
                fontFamily: "Raleway",
                textAlign: isMobile ? "center" : "left",
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              About Us
            </Title>
            <Paragraph
              style={{
                fontFamily: "Roboto",
                fontSize: 20,
                textAlign: "justify",
                color: "#ffffff",
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
                color: "#ffffff",
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
              display: isMobile ? "none" : "flex",
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

      {/* get started? */}
      <div
        style={{
          background: "#1890ff",
          padding: "30px 32px",
        }}
      >
        {/* Heading */}
        <Title
          level={2}
          style={{
            fontFamily: "Raleway",
            textAlign: "center",
            color: "white",
            marginBottom: 12,
          }}
        >
          Ready to Get Started?
        </Title>

        {/* Subtitle */}
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <Text
            style={{
              fontFamily: "Raleway",
              fontSize: 18,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Contact us today to get an instant quotation and experience our
            premium heavy vehicle transport services across the UAE.
          </Text>
        </div>

        {/* Cards Section */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 20,
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          {/* Request Quotation Card */}
          <Card
            style={{
              flex: 1,
              textAlign: "center",
              borderRadius: 12,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <FormOutlined style={{ fontSize: 36, color: "#1890ff" }} />
              <Title
                level={3}
                style={{ marginBottom: 0, fontFamily: "Raleway" }}
              >
                Request a Quotation
              </Title>
              <Text type="secondary" style={{ fontFamily: "Raleway" }}>
                Get a fast and accurate quote for your transport needs.
              </Text>
              <Button
                type="primary"
                size="large"
                block
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                style={{ fontFamily: "Raleway" }}
              >
                <Link to="/quotation">Get Quote</Link>
              </Button>
            </Space>
          </Card>

          {/* Contact Info Card */}
          <Card
            style={{
              flex: 1,
              borderRadius: 12,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <Space
              direction="vertical"
              size="large"
              style={{ width: "100%", padding: "0 10px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "Raleway",
                }}
              >
                <PhoneFilled style={{ fontSize: 30, color: "#1890ff" }} />
                <div>
                  <Text strong style={{ fontSize: 20, fontFamily: "Raleway" }}>
                    Call Us
                  </Text>
                  <br />
                  <Text
                    type="secondary"
                    style={{ fontSize: 16, fontFamily: "Roboto" }}
                  >
                    050-5555-555
                  </Text>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MailOutlined style={{ fontSize: 30, color: "#1890ff" }} />
                <div>
                  <Text strong style={{ fontSize: 20, fontFamily: "Raleway" }}>
                    Email Us
                  </Text>
                  <br />
                  <Text
                    type="secondary"
                    style={{ fontSize: 16, fontFamily: "Roboto" }}
                  >
                    info@kazwatransport.com
                  </Text>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MessageFilled style={{ fontSize: 30, color: "#1890ff" }} />
                <div>
                  <Text strong style={{ fontSize: 20, fontFamily: "Raleway" }}>
                    Message Us
                  </Text>
                  <br />
                  <Text
                    type="secondary"
                    style={{ fontSize: 16, fontFamily: "Roboto" }}
                  >
                    050-5555-555
                  </Text>
                </div>
              </div>
            </Space>
          </Card>
        </div>
      </div>
    </Motion>
  );
}

export default Home;
