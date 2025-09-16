import React from "react";
import Motion from "../components/Motion";
import { motion } from "framer-motion";
import { useUser } from "../contexts/UserContext";
import { Card, Col, Image, Row, Typography } from "antd";
import { servicesData } from "../assets/data/data";
import { Link } from "react-router-dom";
import {
  CheckCircleFilled,
  MailOutlined,
  PhoneFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";
import SplitText from "../components/SplitText";
import ReactDOMServer from "react-dom/server";
import Swal from "sweetalert2";

const { Paragraph, Title, Text } = Typography;

const img = "https://images.pexels.com/photos/172074/pexels-photo-172074.jpeg";

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

const cardDivStyle = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
};

const iconStyle = {
  fontSize: 30,
  margin: 0,
  padding: 8,
  color: "#1890ff",
  borderRadius: 50,
  background: "#ece0e0a3",
  transition: "all 0.3s ease",
};

const textStyle = {
  fontFamily: "Raleway",
  fontWeight: 700,
  letterSpacing: 1,
  fontSize: 20,
};

const cardStyle = {
  marginBottom: 10,
  background: "transparent",
  border: "1px solid #1890ff",
  boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
};

function Services() {
  const { isMobile } = useUser();

  return (
    <Motion>
      {/* banner */}
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
                SERVICES
              </Title>
            </motion.div>
          </div>
        </div>
      </div>

      {/* services */}
      <div>
        {" "}
        <div
          style={{
            textAlign: "center",
            margin: 0,
          }}
        >
          <SplitText
            text={
              <Title
                style={{
                  textAlign: "center",
                  fontFamily: "Raleway",
                  fontWeight: 700,
                }}
              >
                FIND THE BEST SOLUTION
              </Title>
            }
            delay={50}
            duration={0.3}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto",
              fontWeight: 600,
              marginBottom: 20,
              color: "#333",
              fontSize: 20,
              marginTop: 0,
            }}
            type="secondary"
          >
            Every solution for your transportation needs under one roof
          </Text>
        </div>
        <div style={{ margin: "14px 40px", padding: 20 }}>
          <Row gutter={[16, 16]}>
            {servicesData.map((card) => (
              <Col xs={24} sm={12} md={6} key={card.id}>
                <Card
                  hoverable
                  style={{
                    height: 300,
                    borderRadius: 12,
                    backdropFilter: "blur(2px)",
                    border: "1px solid rgba(0,0,0,0)",
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
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
                      marginBottom: 15,
                      fontFamily: "Raleway",
                      fontWeight: 500,
                    }}
                  >
                    <Text
                      type="secondary"
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 14,
                      }}
                    >
                      {card.text}
                    </Text>
                  </div>
                  <div style={{ position: "absolute", bottom: 0 }}>
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

      {/* assurance */}
      <div
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0.14) 5%, rgba(255,255,255,0.1) 33.33%, rgba(0,0,0,0.15) 66.67%, rgba(0,0,0,0.04) 100%)",
        }}
      >
        <div
          style={{
            display: isMobile ? "none" : "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "0 50px",
            padding: "20px 60px",
          }}
        >
          <span>
            <CheckCircleFilled style={{ color: "#1890ff", fontSize: 20 }} />{" "}
            <Text style={{ fontFamily: "Roboto", fontSize: 20 }}>
              Quality and Safety
            </Text>
          </span>

          <span>
            <CheckCircleFilled style={{ color: "#1890ff", fontSize: 20 }} />{" "}
            <Text style={{ fontFamily: "Roboto", fontSize: 20 }}>
              Fast Dispatch
            </Text>
          </span>
          <span>
            <CheckCircleFilled style={{ color: "#1890ff", fontSize: 20 }} />{" "}
            <Text style={{ fontFamily: "Roboto", fontSize: 20 }}>
              Guaranteed Customer Satisfaction
            </Text>
          </span>
          <span>
            <CheckCircleFilled style={{ color: "#1890ff", fontSize: 20 }} />{" "}
            <Text style={{ fontFamily: "Roboto", fontSize: 20 }}>
              JAFZA Operation
            </Text>
          </span>
        </div>
      </div>

      {/* Contact */}
      <div style={{ margin: 16, padding: 32, marginTop: 0 }}>
        <Title
          style={{
            textAlign: "center",
            fontFamily: "Raleway",
          }}
        >
          Contact Us Directly
        </Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={10} md={8}>
            <Card hoverable style={cardStyle}>
              <div style={cardDivStyle}>
                <span>
                  <PhoneFilled
                    style={iconStyle}
                    onClick={() => {
                      Swal.fire({
                        icon: "info",
                        title: "Call Us",
                        html: ReactDOMServer.renderToString(
                          <div style={{ textAlign: "center" }}>
                            <Paragraph
                              style={{ fontSize: "16px", marginBottom: "10px" }}
                            >
                              +971 50 212 3456
                            </Paragraph>
                            <a
                              href="tel:+971502123456"
                              style={{
                                display: "inline-block",
                                backgroundColor: "#1890ff",
                                color: "#fff",
                                padding: "8px 16px",
                                borderRadius: "8px",
                                textDecoration: "none",
                              }}
                            >
                              Call
                            </a>
                          </div>
                        ),
                        showConfirmButton: false, // hides default OK button
                      });
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.15)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </span>

                <Text style={textStyle}>Call Us</Text>
              </div>
            </Card>
          </Col>

          <Col xs={24} sm={10} md={8}>
            <Card hoverable style={cardStyle}>
              <div style={cardDivStyle}>
                <span>
                  <WhatsAppOutlined
                    style={iconStyle}
                    onClick={() =>
                      window.open(
                        "https://wa.me/971502123456",
                        "_blank",
                        "noreferrer noopenner"
                      )
                    }
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.15)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </span>
                <Text style={textStyle}>WhatsApp</Text>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={10} md={8}>
            <Card hoverable style={cardStyle}>
              <div style={cardDivStyle}>
                <span>
                  <MailOutlined
                    style={iconStyle}
                    onClick={() =>
                      window.open(
                        "mailto:info@uaeheavytransport.ae",
                        "noreferrer noopenner",
                        "_blank"
                      )
                    }
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.15)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </span>
                <Text style={textStyle}>Email Us</Text>
              </div>
            </Card>
          </Col>
        </Row>

        <div style={{ textAlign: "center" }}>
          <Text
            type="secondary"
            style={{ textDecoration: "italic", fontFamily: "Roboto" }}
          >
            Our team will contact you within 30 minutes
          </Text>
        </div>
      </div>
    </Motion>
  );
}

export default Services;
