import logo from "../assets/icons/logo.png";
import { Typography, Divider, Space } from "antd";
import {
  InstagramFilled,
  FacebookFilled,
  XOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useUser } from "../contexts/UserContext";

const { Title, Paragraph, Text } = Typography;

function FooterContent() {
  const { isMobile } = useUser();

  return (
    <footer
      style={{
        background: "#001529",
        color: "#fff",
        //padding: "40px 20px 10px",
      }}
    >
      {/* Main Footer Content */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-around",
          alignItems: isMobile ? "flex-start" : "stretch",
          gap: 30,
        }}
      >
        {/* About */}
        <div style={{ maxWidth: 350 }}>
          <img
            src={logo}
            alt="Kazwa Transport"
            style={{ width: 120, marginBottom: 0 }}
          />
          <Title style={{ margin: 0,color:'#ddd' }}>Kazwa Transport</Title>
          <Paragraph style={{ color: "#ddd", fontFamily: "Raleway" }}>
            Your trusted partner for heavy vehicle and pickup transportation
            across the UAE.
          </Paragraph>

          {/* Contact Info */}
          <Space direction="vertical" size="small">
            <Text style={{ color: "#ddd" }}>
              <EnvironmentOutlined style={{ marginRight: 8 }} />
              Dubai, UAE
            </Text>
            <Text style={{ color: "#ddd" }}>
              <PhoneOutlined style={{ marginRight: 8 }} /> +971 50 555 5555
            </Text>
            <Text style={{ color: "#ddd" }}>
              <MailOutlined style={{ marginRight: 8 }} />{" "}
              info@kazwatransport.com
            </Text>
          </Space>

          {/* Social Links */}
          <div style={{ marginTop: 12 }}>
            <Space size="middle">
              <FacebookFilled style={{ fontSize: 24, cursor: "pointer" }} />
              <InstagramFilled style={{ fontSize: 24, cursor: "pointer" }} />
              <XOutlined style={{ fontSize: 24, cursor: "pointer" }} />
            </Space>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <Title level={4} style={{ color: "#fff", fontFamily: "Raleway" }}>
            Quick Links
          </Title>
          <Space direction="vertical" size="small">
            <Text style={{ cursor: "pointer", color: "#ddd" }}>Home</Text>
            <Text style={{ cursor: "pointer", color: "#ddd" }}>About Us</Text>
            <Text style={{ cursor: "pointer", color: "#ddd" }}>Services</Text>
            <Text style={{ cursor: "pointer", color: "#ddd" }}>Contact Us</Text>
            <Text style={{ cursor: "pointer", color: "#ddd" }}>
              Get Quotation
            </Text>
          </Space>
        </div>

        {/* Services */}
        <div>
          <Title level={4} style={{ color: "#fff", fontFamily: "Raleway" }}>
            Our Services
          </Title>
          <Space direction="vertical" size="small">
            <Text style={{ color: "#ddd" }}>Construction Transport</Text>
            <Text style={{ color: "#ddd" }}>Commercial Goods Transport</Text>
            <Text style={{ color: "#ddd" }}>Businesses Transport</Text>
            <Text style={{ color: "#ddd" }}>3PL Logistics Services</Text>
          </Space>
        </div>

        {/* Legal */}
        <div>
          <Title level={4} style={{ color: "#fff", fontFamily: "Raleway" }}>
            Legal
          </Title>
          <Space direction="vertical" size="small">
            <Text style={{ color: "#ddd" }}>Terms & Conditions</Text>
            <Text style={{ color: "#ddd" }}>Privacy Policy</Text>
            <Text style={{ color: "#ddd" }}>Cookie Policy</Text>
            <Text style={{ color: "#ddd" }}>Sitemap</Text>
          </Space>
        </div>
      </div>

      {/* Divider */}
      <Divider
        style={{ borderColor: "rgba(255, 255, 255, 0)", margin: "20px 0" }}
      />

      {/* Bottom Bar */}
      <div style={{ textAlign: "center", color: "#888", fontSize: 14 }}>
        © {new Date().getFullYear()} UAE Heavy Transport. All Rights Reserved. A
        Sea Prince Logistics Group of Companies.
      </div>
    </footer>
  );
}

export default FooterContent;
