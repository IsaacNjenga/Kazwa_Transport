import {
  AppstoreOutlined,
  BankFilled,
  BankOutlined,
  HomeFilled,
  InfoCircleOutlined,
  ProductFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const iconStyle = {
  fontSize: 30,
  margin: 0,
  padding: 8,
  color: "#1890ff",
  borderRadius: 50,
  border: "2px solid #1890ff",
  background: "whitesmoke",
};

export const servicesCard = [
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

export const whyData = [
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
