export type CaseStudy = {
  image: string;
  category: string;
  title: string;
  description: string;
  industry: string;
  country: string;
  technologies: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    image: "/images/case_image_1.webp",
    category: "Computer Software",
    title: "Astarte Medical",
    description:
      "Creating software for Astarte Medical involves a meticulous process aimed at addressing their specific needs and objectives. It begins with thorough research and planning to understand the requirements and goals of the project.",
    industry: "Computer software",
    country: "Germany, Issum",
    technologies: ["/images/icon_angular.svg", "/images/icon_elephent.svg"],
  },
  {
    image: "/images/case_image_2.webp",
    category: "Healthcare",
    title: "CAE Blue Phantom",
    description:
      "CAE Blue Phantom is a cutting-edge simulation technology designed to revolutionize medical training and education. Utilizing advanced virtual reality and artificial intelligence, CAE Blue Phantom provides realistic scenarios.",
    industry: "Wellness & Fitness",
    country: "Germany, Issum",
    technologies: ["/images/icon_angular.svg", "/images/icon_netcore.svg"],
  },
  {
    image: "/images/case_image_3.webp",
    category: "Real Estate",
    title: "Liberkeys",
    description:
      "Liberkeys is a modern real estate platform that is revolutionizing the way people buy, sell, and rent properties. With a focus on transparency, efficiency, and customer satisfaction, Liberkeys streamlines every step.",
    industry: "Real estate",
    country: "France, Paris",
    technologies: ["/images/vuejs.svg", "/images/icon_python.svg"],
  },
];
