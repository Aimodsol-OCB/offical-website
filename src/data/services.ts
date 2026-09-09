export type ServiceCard = {
  icon: string;
  title: string;
  items: string[];
};

export const services: ServiceCard[] = [
  {
    icon: "/images/icon_monitor_2.svg",
    title: "Product Engineering",
    items: [
      "Web App Development Services",
      "Web Portal Development Services",
      "Website Development Services",
      "Offshore Web Development",
    ],
  }, 
  {
    icon: "/images/icon_bug.svg",
    title: "Experience Design",
    items: [
      "Intuitive UI/UX",
      "Brand Identity & Typography",
      "Visual Assets",
      "Corporate Stationery",
    ],
  },

  {
    icon: "/images/icon_programming.svg",
    title: "Growth & Performance",
    items: [
      "Search Intelligence (SEO)",
      "Content Strategy & Copywriting",
      "Retention Marketing",
      "Information Architecture (IA) Optimization",
    ],
  },
  {
    icon: "/images/icon_code.svg",
    title: "Custom Software Development",
    items: [
      "Software Architecture Design",
      "System Integration Services",
      "Data Migration Services",
      "Legacy App Modernization",
    ],
  },
  {
    icon: "/images/icon_phone.svg",
    title: "Pocket-First Solutions",
    items: [
      "Native Android Development",
      "Native iOS Development",
      "Cross-Platform App Development",
      "Mobile UI/UX Design",
      "Enterprise Mobile App Development",
    ],
  },
  {
    icon: "/images/icon_programming_tree.svg",
    title: "Audit & IT Consulting Services",
    items: [
      "Code & Architecture Audit",
      "Security & Compliance Audit",
      "IT Infrastructure Audit",
      "Technology Strategy Consulting",
    ],
  },
  {
    icon: "/images/icon_programming_tree.svg",
    title: "Maintenance and Customer Support",
    items: [
      "Bug Fixes & Technical Support",
      "Proactive Monitoring & Uptime",
      "Security & Dependency Updates",
      "Performance & Infrastructure Optimization",
      "Client Support & Helpdesk",
    ],
  },

 
];

// Featured Services grid used on the dedicated /services page (different
// layout/content from the homepage's 6-card `services` list above).
export const featuredServices = [
  {
    image: "/images/service_image_1.webp",
    title: "Next-Gen Web Apps",
    tags: ["MERN Stack", ".NET"],
  },
  {
    image: "/images/service_image_2.webp",
    title: "Native & Cross-Platform Mobile",
    tags: ["Swift/Kotlin", "React Native"],
  },
  {
    image: "/images/service_image_3.webp",
    title: "Intuitive UI/UX",
    tags: ["Interface", "User Journey"],
  },
  {
    image: "/images/service_image_4.webp",
    title: "Brand Identity & Typography",
    tags: ["Visual DNA", "Brand"],
  },
  {
    image: "/images/service_image_5.webp",
    title: "Search Intelligence (SEO)",
    tags: ["Search Dominance", "Organic Growth"],
  },
  {
    image: "/images/service_image_6.webp",
    title: "Content Strategy & Copywriting",
    tags: ["Website Copy", "Campaign Content"],
  },
  {
    image: "/images/service_image_7.webp",
    title: "AI Integrations",
    tags: ["LLMs", "Chatbots"],
  },
];

export const whyUsFacilities = [
  { icon: "/images/icon_check_2.svg", title: "Quality Comes First" },
  { icon: "/images/icon_leaf.svg", title: "Flexible Cooperation" },
  { icon: "/images/icon_box.svg", title: "On-time Delivery" },
  { icon: "/images/icon_receipt_add.svg", title: "Transparent Costs" },
  { icon: "/images/icon_monitor.svg", title: "Qualified Developers" },
  { icon: "/images/icon_microscope.svg", title: "Quick Scale-up" },
];
