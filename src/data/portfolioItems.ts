export type PortfolioItem = {
  image: string;
  title: string;
  tag: string;
  industry: string;
  category: "technology" | "helpdesk" | "analysis" | "marketing";
};

export const portfolioItems: PortfolioItem[] = [
  {
    image: "/images/portfolio_item_image_4.webp",
    title: "Driving Digital Transformation Explore the Depth of Our IT Projects",
    tag: "Logo Design",
    industry: "Finance",
    category: "technology",
  },
  {
    image: "/images/portfolio_item_image_5.webp",
    title: "Explore Our IT Solutions Portfolio for Public Sector Organizations",
    tag: "App Design",
    industry: "Public",
    category: "helpdesk",
  },
  {
    image: "/images/portfolio_item_image_6.webp",
    title: "Innovative Solutions Showcase the Diversity of Our IT Portfolio",
    tag: "Card Design",
    industry: "Transpiration",
    category: "analysis",
  },
  {
    image: "/images/portfolio_item_image_7.webp",
    title: "Tech Triumphs Celebrating Our Achievements in IT Solutions",
    tag: "Web Design",
    industry: "Logistic",
    category: "marketing",
  },
  {
    image: "/images/portfolio_item_image_8.webp",
    title: "Revolutionizing IT Strategies A Closer Look at Our Dynamic IT Solutions",
    tag: "Web Design",
    industry: "Fution",
    category: "technology",
  },
  {
    image: "/images/portfolio_item_image_9.webp",
    title: "Cloud Migration and Integration Project IT Solutions Portfolio",
    tag: "Web Design",
    industry: "Energy",
    category: "helpdesk",
  },
  {
    image: "/images/portfolio_item_image_10.webp",
    title: "Pioneering Progress Exploring the Evolution and Impact of",
    tag: "Web Design",
    industry: "Health",
    category: "analysis",
  },
  {
    image: "/images/portfolio_item_image_11.webp",
    title: "Unlocking Potential Explore Our Comprehensive IT Portfolio",
    tag: "Web Design",
    industry: "Industry",
    category: "marketing",
  },
];

export const portfolioFilters = [
  { label: "See All", value: "all" },
  { label: "Technology", value: "technology" },
  { label: "Helpdesk", value: "helpdesk" },
  { label: "Analysis", value: "analysis" },
  { label: "Marketing", value: "marketing" },
];
