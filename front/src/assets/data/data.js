import {
  AppstoreOutlined,
  BankFilled,
  BankOutlined,
  CarFilled,
  ContainerFilled,
  EnvironmentFilled,
  HomeFilled,
  InfoCircleOutlined,
  ProductFilled,
  ShoppingCartOutlined,
  ToolFilled,
  TruckFilled,
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
    text: "Customized transportation solutions for various industries including manufacturing, retail and more.",
  },
];

export const servicesData = [
  {
    id: 1,
    icon: <BankFilled style={iconStyle} />,
    title: "Construction Transport",
    text: "Specialized transportation for construction equipment, machinery, and materials to your site.",
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
    text: "Reliable solutions tailored for logistics companies and free zone operations, meeting all compliance requirements.",
  },
  {
    id: 4,
    icon: <ContainerFilled style={iconStyle} />,
    title: "Container Haulage",
    text: "Port-to-warehouse container transport for imports and exports, including refrigerated and dry containers.",
  },
  {
    id: 5,
    icon: <TruckFilled style={iconStyle} />,
    title: "Long-Distance Haulage",
    text: "Efficient cross-emirate transport services for bulk cargo, raw materials, and heavy freight.",
  },
  {
    id: 6,
    icon: <EnvironmentFilled style={iconStyle} />,
    title: "Site Relocation",
    text: "Complete site relocation services including dismantling, transport, and setup of heavy equipment.",
  },
  {
    id: 7,
    icon: <ToolFilled style={iconStyle} />,
    title: "Heavy Equipment Rental",
    text: "Rental of trucks, trailers, and lifting equipment with experienced operators for short-term projects.",
  },
  {
    id: 8,
    icon: <CarFilled style={iconStyle} />,
    title: "Vehicle Recovery & Towing",
    text: "Professional towing and recovery services for heavy vehicles, trucks, and machinery breakdowns.",
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
