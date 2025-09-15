import Motion from "../components/Motion";
import { useUser } from "../contexts/UserContext";
import { Card, Col, Image, Row, Statistic, Typography } from "antd";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { differenceInYears } from "date-fns";
import "../assets/css/about.css";
import SplitText from "../components/SplitText";
import { useRef, useState } from "react";

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

const yearsInService = differenceInYears(new Date(), new Date(1998, 0, 1));

const img =
  "https://images.pexels.com/photos/12267889/pexels-photo-12267889.jpeg";

const team = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO & Co-Founder",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 2,
    name: "Alex Doe",
    title: "Co-Founder",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 3,
    name: "John Doe",
    title: "Head of Sales",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

const formatter = (value, suffix, start, duration) => (
  <div style={{ margin: "0 auto", textAlign: "center" }}>
    <Text
      style={{
        textAlign: "center",
        fontFamily: "Roboto",
        color: "red",
        fontSize: 45,
        fontWeight: 700,
        margin: "0 auto",
      }}
    >
      {start ? (
        <CountUp end={value} duration={duration} suffix={suffix} />
      ) : (
        "0" + (suffix || "")
      )}
    </Text>
  </div>
);

function About() {
  const { isMobile } = useUser();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [start, setStart] = useState(false);

  if (isInView && !start) setStart(true);

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

      {/* hero */}
      <div>
        <div style={{ textAlign: "center", marginBottom: 0 }}>
          <SplitText
            text={
              <Title
                style={{
                  fontFamily: "Raleway",
                  fontWeight: 800,
                  textAlign: "center",
                  marginTop: 40,
                  marginBottom: 0,
                }}
              >
                Moving UAE Forward, One Pickup at a Time
              </Title>
            }
            delay={50}
            duration={0.1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
        <Paragraph
          style={{
            fontFamily: "Roboto",
            textAlign: "center",
            width: isMobile ? 400 : 700,
            margin: "0 auto",
            fontSize: 18,
            marginBottom: 20,
            padding: 10,
            marginTop: 0,
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

      {/* background */}
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

      {/* statistics */}
      <div
        ref={ref}
        style={{
          margin: "50px auto",
          width: isMobile ? "100%" : "80%",
          padding: 10,
        }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12} sm={6}>
            <Statistic
              title={
                <div style={{ textAlign: "center", marginBottom: 0 }}>
                  <SplitText
                    text={
                      <Title
                        level={isMobile ? 4 : 1}
                        style={{
                          fontFamily: "Raleway",
                        }}
                      >
                        Years Of Service
                      </Title>
                    }
                    delay={25}
                    duration={0.1}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    textAlign="center"
                  />
                </div>
              }
              value={yearsInService}
              formatter={(val) => formatter(val, "", start, 1)}
              valueStyle={{ textAlign: "center" }}
            />
          </Col>
          <Col xs={24} md={12} sm={6}>
            <Statistic
              title={
                <div style={{ textAlign: "center", marginBottom: 0 }}>
                  <SplitText
                    text={
                      <Title
                        level={isMobile ? 4 : 1}
                        style={{
                          fontFamily: "Raleway",
                        }}
                      >
                        Satisfied Clients
                      </Title>
                    }
                    delay={25}
                    duration={0.1}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    textAlign="center"
                  />
                </div>
              }
              value={100}
              formatter={(val) => formatter(val, "", start, 2)}
              valueStyle={{ textAlign: "center" }}
            />
          </Col>
          <Col xs={24} md={12} sm={6}>
            <Statistic
              title={
                <div style={{ textAlign: "center", marginBottom: 0 }}>
                  <SplitText
                    text={
                      <Title
                        level={isMobile ? 4 : 1}
                        style={{
                          fontFamily: "Raleway",
                        }}
                      >
                        Trucks In Stock
                      </Title>
                    }
                    delay={25}
                    duration={0.1}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    textAlign="center"
                  />
                </div>
              }
              value={100}
              formatter={(val) => formatter(val, "", start, 3)}
              valueStyle={{ textAlign: "center" }}
            />
          </Col>
          <Col xs={24} md={12} sm={6}>
            <Statistic
              title={
                <div style={{ textAlign: "center", marginBottom: 0 }}>
                  <SplitText
                    text={
                      <Title
                        level={isMobile ? 4 : 1}
                        style={{
                          fontFamily: "Raleway",
                        }}
                      >
                        Successful Deliveries
                      </Title>
                    }
                    delay={25}
                    duration={0.1}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    textAlign="center"
                  />
                </div>
              }
              value={300}
              formatter={(val) => formatter(val, "+", start, 4)}
              valueStyle={{ textAlign: "center", display: "block", order: 1 }}
              titleStyle={{ display: "block", order: 2 }}
            />
          </Col>
        </Row>
      </div>

      {/* the team */}
      <div>
        {" "}
        <div style={{ textAlign: "center", marginBottom: 0 }}>
          <SplitText
            text={
              <Title
                style={{
                  fontFamily: "Raleway",
                  fontWeight: 800,
                  marginTop: 40,
                  marginBottom: 0,
                }}
              >
                OUR TEAM
              </Title>
            }
            delay={100}
            duration={0.1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
        <Paragraph
          type="secondary"
          style={{
            fontFamily: "Raleway",
            textAlign: "center",
            fontWeight: "800",
            fontSize: 18,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          pellentesque viverra quam in aliquam laoreet quis justo.
        </Paragraph>
        <div style={{ margin: 10, padding: 20 }}>
          <Row gutter={[16, 16]}>
            {team.map((t) => (
              <Col xs={24} md={8} sm={6} key={t.id}>
                {" "}
                <Card
                  hoverable
                  style={{
                    background: "rgba(0,0,0,0)",
                    maxWidth: 400,
                    margin: "0 auto",
                    padding: 0,
                    width: "100%",
                    height: "auto",
                    border: "1px solid rgba(0,0,0,0)",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <Image
                      src={t.img}
                      alt="_img"
                      preview={false}
                      height={200}
                      width={200}
                      style={{ borderRadius: "50%", objectFit: "cover" }}
                    />
                    <Title
                      level={4}
                      style={{ fontFamily: "Raleway", fontWeight: 700 }}
                    >
                      {t.name}
                    </Title>
                    <Text type="secondary" style={{ fontFamily: "Roboto" }}>
                      {t.title}
                    </Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Motion>
  );
}

export default About;
