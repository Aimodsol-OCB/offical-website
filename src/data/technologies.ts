export type TechItem = { name: string; icon: string };

export const techTabs: { id: string; label: string; items: TechItem[] }[] = [
  {
    id: "tab_web_platform",
    label: "Web Platform",
    items: [
      { name: "PHP", icon: "/images/icon_php.svg" },
      { name: "JavaScript", icon: "/images/icon_javascript.svg" },
      { name: "PostgreSQL", icon: "/images/icon_elephent.svg" },
      { name: "Swift", icon: "/images/icon_swift.svg" },
      { name: "Typescript", icon: "/images/icon_typescript.svg" },
      { name: "Python", icon: "/images/icon_python.svg" },
      { name: "G318", icon: "/images/icon_g318.svg" },
      { name: "Java", icon: "/images/icon_java.svg" },
      { name: "Ruby", icon: "/images/icon_ruby.svg" },
      { name: "C++", icon: "/images/icon_c_plus.svg" },
      { name: "React Js", icon: "/images/icon_react_js.svg" },
      { name: "Laraval", icon: "/images/icon_laravel.svg" },
    ],
  },
  {
    id: "tab_databases",
    label: "Databases",
    items: [
      { name: "PostgreSQL", icon: "/images/icon_elephent.svg" },
      { name: "Swift", icon: "/images/icon_swift.svg" },
      { name: "Typescript", icon: "/images/icon_typescript.svg" },
      { name: "Python", icon: "/images/icon_python.svg" },
      { name: "G318", icon: "/images/icon_g318.svg" },
      { name: "Java", icon: "/images/icon_java.svg" },
      { name: "Ruby", icon: "/images/icon_ruby.svg" },
      { name: "C++", icon: "/images/icon_c_plus.svg" },
      { name: "React Js", icon: "/images/icon_react_js.svg" },
      { name: "Laraval", icon: "/images/icon_laravel.svg" },
    ],
  },
  {
    id: "tab_cloud_devops",
    label: "Cloud & DevOps",
    items: [
      { name: "Swift", icon: "/images/icon_swift.svg" },
      { name: "Typescript", icon: "/images/icon_typescript.svg" },
      { name: "Python", icon: "/images/icon_python.svg" },
      { name: "G318", icon: "/images/icon_g318.svg" },
      { name: "Java", icon: "/images/icon_java.svg" },
      { name: "Ruby", icon: "/images/icon_ruby.svg" },
      { name: "C++", icon: "/images/icon_c_plus.svg" },
      { name: "React Js", icon: "/images/icon_react_js.svg" },
      { name: "Laraval", icon: "/images/icon_laravel.svg" },
    ],
  },
  {
    id: "tab_mobile_apps",
    label: "Mobile Apps",
    items: [
      { name: "Typescript", icon: "/images/icon_typescript.svg" },
      { name: "Python", icon: "/images/icon_python.svg" },
      { name: "G318", icon: "/images/icon_g318.svg" },
      { name: "Java", icon: "/images/icon_java.svg" },
      { name: "Ruby", icon: "/images/icon_ruby.svg" },
      { name: "C++", icon: "/images/icon_c_plus.svg" },
      { name: "React Js", icon: "/images/icon_react_js.svg" },
      { name: "Laraval", icon: "/images/icon_laravel.svg" },
    ],
  },
  {
    id: "tab_other_frameworks",
    label: "Other Frameworks",
    items: [
      { name: "Python", icon: "/images/icon_python.svg" },
      { name: "G318", icon: "/images/icon_g318.svg" },
      { name: "Java", icon: "/images/icon_java.svg" },
      { name: "Ruby", icon: "/images/icon_ruby.svg" },
      { name: "C++", icon: "/images/icon_c_plus.svg" },
      { name: "React Js", icon: "/images/icon_react_js.svg" },
      { name: "Laraval", icon: "/images/icon_laravel.svg" },
    ],
  },
];

export const processSteps = [
  { id: "collapse_one", title: "01. Discovery Phase", short: "Discovery Phase" },
  { id: "collapse_two", title: "02. Design and Development", short: "Design and Development" },
  { id: "collapse_three", title: "03. Maintenance", short: "Maintenance" },
  { id: "collapse_four", title: "04. Deployment", short: "Deployment" },
  { id: "collapse_five", title: "05. Testing and QA", short: "Testing and QA" },
];

export const processBody =
  "Data - driven diagnostic and predictive app for improving outcomes Data driven diagnostic and predictive app for improving.";
