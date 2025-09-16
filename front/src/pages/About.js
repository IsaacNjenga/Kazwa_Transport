import Motion from "../components/Motion";
import { useUser } from "../contexts/UserContext";
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  Input,
  Row,
  Space,
  Statistic,
  Typography,
} from "antd";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { differenceInYears } from "date-fns";
import "../assets/css/about.css";
import SplitText from "../components/SplitText";
import { useRef, useState } from "react";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Swal from "sweetalert2";
import axios from "axios";

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

const inputStyle = {
  height: 40,
  fontFamily: "Roboto",
  borderRadius: 0,
  color: "#ffff",
  background: "rgba(0,0,0,0.1)",
};

const labelStyle = {
  fontFamily: "Raleway",
  color: "#ffffff",
  fontSize: 16,
  fontWeight: 400,
};

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
  const [form] = Form.useForm();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  if (isInView && !start) setStart(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const allValues = await form.validateFields();
      //console.log(allValues);

      await axios.post(
        "https://getform.io/f/anlnjkea",
        {
          message: allValues.message,
          email: allValues.email,
          name: allValues.name,
        },
        { headers: { Accept: "application/json" } }
      );

      //console.log(res);

      Swal.fire({
        icon: "success",
        title: "Message sent successfully",
        text: "Thank you for reaching out to us. We will get back to you as soon as possible.",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again",
      });
    } finally {
      setLoading(false);
      form.resetFields();
    }
  };

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

      {/* get in touch */}
      <div
        style={{
          marginTop: 0,
          marginBottom: 0,
          background:
            'url("https://images.pexels.com/photos/33734430/pexels-photo-33734430.jpeg") center center no-repeat fixed',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            margin: 0,
            padding: "30px 32px",
            backdropFilter: "blur(1px)",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 0 }}>
            <SplitText
              text={
                <Title
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: 800,
                    marginTop: 40,
                    marginBottom: 0,
                    color: "#fff",
                  }}
                >
                  Get In Touch
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

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <div
              style={{
                padding: 20,
                margin: 10,
                width: isMobile ? "100%" : "30%",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Space
                direction="vertical"
                size="small"
                style={{ marginRight: 25 }}
              >
                <Title
                  level={3}
                  style={{ fontFamily: "Raleway", color: "#ffffff" }}
                >
                  Location
                </Title>
                <Text style={{ color: "#ffffff" }}>
                  <EnvironmentOutlined
                    style={{ marginRight: 8, fontSize: 20 }}
                  />
                  Jable Ali Free Zone (JAFZE), Dubai, UAE
                </Text>
                <Text style={{ color: "#ffffff" }}>
                  <PhoneOutlined style={{ marginRight: 8, fontSize: 20 }} />{" "}
                  +971 50 555 5555
                </Text>
                <Text style={{ color: "#ffffff" }}>
                  <MailOutlined style={{ marginRight: 8, fontSize: 20 }} />{" "}
                  <a
                    href="mailto:info@uaeheavytransport.ae"
                    target="_blank"
                    rel="noreferrer noopenner"
                    style={{ color: "#ddd" }}
                  >
                    info@uaeheavytransport.ae
                  </a>{" "}
                </Text>
              </Space>
              <Space direction="vertical" size="small">
                <Title
                  level={3}
                  style={{ fontFamily: "Raleway", color: "#ffffff" }}
                >
                  Working Hours
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    color: "#ffffff",
                  }}
                >
                  <span>Sunday - Thursday: 8:00 AM - 6:00 PM</span>
                  <span>Friday - Saturday: 9:00 AM - 1:00 PM</span>
                </div>
              </Space>
            </div>

            {/* form */}

            <div
              style={{
                padding: 10,
                margin: 10,
                width: isMobile ? "100%" : "70%",
              }}
            >
              <Card
                hoverable
                width={400}
                style={{
                  background:
                    "linear-gradient(to right, #4079eace 50%, #188fffa3 100%)",
                  margin: "0 auto",
                  width: "100%",
                  borderColor: "rgba(0, 0, 0, 0.3)",
                  borderRadius: 0,
                }}
              >
                <Form
                  layout="vertical"
                  variant="filled"
                  size="large"
                  labelAlign="right"
                  onFinish={handleSubmit}
                  form={form}
                >
                  <Form.Item
                    label={<span style={labelStyle}>Name</span>}
                    name="name"
                  >
                    <Input
                      style={inputStyle}
                      value={values.name}
                      onChange={(val) => handleInputChange(val, "name")}
                      required
                    />
                  </Form.Item>
                  <Form.Item
                    label={<span style={labelStyle}>Email</span>}
                    name="email"
                  >
                    <Input
                      type="email"
                      style={inputStyle}
                      value={values.email}
                      onChange={(val) => handleInputChange(val, "email")}
                      required
                    />
                  </Form.Item>
                  <Form.Item
                    label={<span style={labelStyle}>Message</span>}
                    name="message"
                  >
                    <Input.TextArea
                      value={values.message}
                      style={{ ...inputStyle, height: 80 }}
                      onChange={(val) => handleInputChange(val, "message")}
                      rows={4}
                      required
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{
                        width: "100%",
                        background: "whitesmoke",
                        color: "#333",
                        fontWeight: 400,
                        fontFamily: "Roboto",
                        borderRadius: 0,
                      }}
                      block
                      loading={loading}
                      // disabled={
                      //   !values.name && !values.email && !values.message
                      // }
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Motion>
  );
}

export default About;
