import React, { useState } from "react";
import { Button, Drawer, Layout, Menu, Typography } from "antd";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
//import logo from "../assets/icons/logo.png";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import FooterContent from "./Footer";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const headerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
  width: "100%",
  padding: "2px 24px",
  display: "flex",
  alignItems: "center",
  transition: "all 0.9s ease",
  transform: "translateY(0)",
  height: "auto",
};

// const logoStyle = {
//   borderRadius: "50%",
//   border: "2px solid #fff",
//   objectFit: "cover",
//   transition: "all 0.3s ease",
//   cursor: "pointer",
//   margin: "3px 0",
//   padding: 4,
// };

const headerDivStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
};
function Navbar() {
  const { isMobile, scrolled } = useUser();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const navItems = [
    { key: 1, path: "/", title: "Home" },
    { key: 2, path: "/about-us", title: "About Us" },
    { key: 3, path: "/services", title: "Services" },
    { key: 4, path: "/contact", title: "Contact Us" },
    { key: 5, path: "/quotation", title: "Get Quotation" },
  ];
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            ...headerStyle,
            background: scrolled
              ? "linear-gradient(to bottom ,rgba(0,0,0,0.46) 0%, rgba(0,0,0,0.22) 100%)"
              : "linear-gradient(to bottom ,rgba(0,0,0,0.23) 0%, rgba(0,0,0,0.0) 100%)",
            backdropFilter: scrolled ? "blur(1.5px)" : "blur(0px)",
            boxShadow: scrolled
              ? "0 2px 10px rgba(0,0,0,0.2)"
              : "0 0 0 rgba(0,0,0,0)",
          }}
        >
          <div style={headerDivStyle}>
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Title style={{ margin: 0, padding: 0, color: "#fff" }}>
                Logo
              </Title>
              {/* <img
                src={logo}
                alt="logo"
                style={{
                  ...logoStyle,
                  width: isMobile ? 70 : 120,
                  height: isMobile ? 70 : 120,
                }}
              /> */}
            </Link>

            {isMobile ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "auto",
                }}
              >
                <Button
                  icon={<MenuOutlined style={{ color: "#fff" }} />}
                  type="text"
                  onClick={toggleDrawer}
                />
              </div>
            ) : (
              <Menu
                theme="dark"
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  background: "transparent",
                  borderBottom: "none",
                }}
                mode="horizontal"
                items={navItems.map(({ key, title, path }) => ({
                  key,
                  label: (
                    <Link to={path}>
                      <p
                        style={{
                          fontFamily: "Raleway",
                          color: scrolled ? "#ffffff" : "",
                          letterSpacing: 1.5,
                          transition: "all 0.3s ease",
                          margin: 0,
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.05)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      >
                        {title.toLocaleUpperCase()}
                      </p>
                    </Link>
                  ),
                }))}
              />
            )}
          </div>
        </Header>
        <Drawer
          placement="right"
          width={300}
          onClose={toggleDrawer}
          open={drawerOpen}
          style={{ backgroundColor: "#eae4ace8" }}
          closeIcon={
            <CloseOutlined
              style={{
                color: "#333",
              }}
            />
          }
        >
          <Menu
            mode="vertical"
            style={{
              background: "rgb(0,0,0,0)",
              borderColor: "rgb(0,0,0,0)",
              fontFamily: "Raleway",
              fontWeight: "bold",
            }}
          >
            {navItems.map((item) => (
              <Menu.Item key={item.path}>
                <Link
                  to={item.path}
                  style={{
                    color: "#333",
                    textDecoration: "none",
                  }}
                >
                  {item.title}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
        <Content
          style={{
            margin: 0,
            minHeight: "100vh",
            background: "#f2f5fa",
          }}
        >
          <Outlet />
        </Content>
        <Footer style={{ background: "#001529", margin: 0, padding: 0 }}>
          <FooterContent />
        </Footer>
      </Layout>
    </>
  );
}

export default Navbar;
