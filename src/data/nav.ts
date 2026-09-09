export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Pages", href: "/pages" },
  { label: "Contact", href: "/contact" },
];

export const companyMenuLinks = [
  { title: "About Us", description: "Learn more about Amidsol", icon: "/images/icon_wifi.svg", href: "/about" },
  { title: "Our Pricing", description: "Streamlined Pricing", icon: "/images/icon_dollar_2.svg", href: "/pricing" },
  { title: "Portfolio", description: "Explore our all overview", icon: "/images/icon_chart.svg", href: "/portfolio" },
  { title: "Portfolio Details", description: "Explore our work overview", icon: "/images/icon_tag_2.svg", href: "/portfolio-details" },
  { title: "Team", description: "We are friendly, join our team", icon: "/images/icon_user_2.svg", href: "/team" },
  { title: "Team Details", description: "We are friendly, join our team", icon: "/images/icon_users.svg", href: "/team-details" },
  { title: "Services", description: "Happy to help you!", icon: "/images/icon_pen.svg", href: "/services" },
  { title: "Service Details", description: "Happy to help you!", icon: "/images/icon_pen.svg", href: "/service-details" },
];

export const servicesMenuColumns = [
  {
    title: "Services",
    links: [
      "IT Management Services",
      "Data Tracking Security",
      "Website Development",
      "CRM Solutions and Design",
      "UI/UX Design Services",
      "Technology Solution",
      "Software Development",
    ],
  },
  {
    title: "Our Fields",
    links: ["Healthcare", "Banks", "Logistics", "Supermarkets", "Industries", "Hotels", "Fintech"],
  },
  {
    title: "Product",
    links: ["Case Studies", "Our Pricing", "Features", "Overview", "New Releases", "Solutions"],
  },
];

export const pagesMenuLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Blogs", href: "/blog" },
  { label: "Help Center", href: "/contact" },
  { label: "Careers", href: "/careers" },
];
