import { useState } from "react";
import Motion from "../components/Motion";
import { motion } from "framer-motion";
import { useUser } from "../contexts/UserContext";
import { Button, Card, Form, Image, Input, Space, Typography } from "antd";
import SplitText from "../components/SplitText";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Swal from "sweetalert2";
import axios from "axios";

const { Title, Text } = Typography;

const img =
  "https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg";

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

const inputStyle = {
  height: 40,
  fontFamily: "Roboto",
  borderRadius: 0,
  color: "#ffff",
  background: "#2c46577d",
};

const labelStyle = {
  fontFamily: "Raleway",
  color: "#ffffff",
  fontSize: 16,
  fontWeight: 400,
};

function Contact() {
  const [form] = Form.useForm();
  const { isMobile } = useUser();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", message: "" });

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
                CONTACT US
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
            >Your Pickup, Our priority
            </Text>
          </div>
        </div>
      </div>

      {/* get in touch */}
      <div
        style={{
          marginTop: 0,
          marginBottom: 0,
          background:
            'url("https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg") center center no-repeat fixed',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            margin: 0,
            padding: "30px 32px",
            backdropFilter: "blur(0px)",
            background: "rgba(0,0,0,0.8)",
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
              justifyContent: "space-around",
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
                width={300}
                style={{
                  background: "transparent",
                  margin: "0 auto",
                  width: "100%",
                  borderColor: "rgba(0, 0, 0, 0)",
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

export default Contact;
