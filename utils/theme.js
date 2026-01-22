// Shared theme constants and configurations

// Category color mappings
export const categoryColors = {
  all: {
    text: "text-gray-600",
    textHover: "hover:text-gray-400",
    textGroupHover: "group-hover:text-gray-400",
    stroke: "stroke-gray-600",
    strokeHover: "hover:stroke-gray-400",
    fill: "fill-gray-600",
    fillGroupHover: "group-hover:fill-gray-400",
  },
  music: {
    text: "text-sky-600",
    textHover: "hover:text-sky-500",
    textGroupHover: "group-hover:text-sky-600",
    textGroupHoverAlt: "group-hover:text-sky-500",
    stroke: "stroke-sky-600",
    strokeHover: "hover:stroke-sky-400",
    fill: "fill-sky-600",
    fillGroupHover: "group-hover:fill-sky-400",
  },
  books: {
    text: "text-cyan-600",
    textHover: "hover:text-cyan-500",
    textGroupHover: "group-hover:text-cyan-600",
    stroke: "stroke-cyan-600",
    strokeHover: "hover:stroke-cyan-400",
    fill: "fill-cyan-600",
    fillGroupHover: "group-hover:fill-cyan-400",
  },
  writing: {
    text: "text-indigo-600",
    textHover: "hover:text-indigo-500",
    textGroupHover: "group-hover:text-indigo-600",
    stroke: "stroke-indigo-600",
    strokeHover: "hover:stroke-indigo-400",
    fill: "fill-indigo-600",
    fillGroupHover: "group-hover:fill-indigo-400",
  },
  anime: {
    text: "text-red-600",
    textHover: "hover:text-red-500",
    textGroupHover: "group-hover:text-red-600",
    stroke: "stroke-red-600",
    strokeHover: "hover:stroke-red-400",
    fill: "fill-red-600",
    fillGroupHover: "group-hover:fill-red-400",
  },
  sort: {
    text: "text-gray-500",
    textGroupHover: "group-hover:text-gray-400",
    fill: "fill-gray-500",
    fillGroupHover: "group-hover:fill-gray-400",
  },
};

// Helper functions to get specific color classes
export const getHeaderTextClass = (category) => {
  const colors = {
    all: "flex text-gray-600 md:text-sm text-xs",
    music: "flex text-sky-600 md:text-sm text-xs",
    books: "flex text-cyan-600 md:text-sm text-xs",
    writing: "flex text-indigo-600 md:text-sm text-xs",
    anime: "flex text-red-600 md:text-sm text-xs",
  };
  return colors[category] || colors.all;
};

export const getListItemTextClass = (category) => {
  // Handle array categories from Contentful
  const cat = Array.isArray(category) ? category[0] : category;

  // Ensure we have a valid category
  if (!cat) {
    return "text-gray-600 md:text-gray-500 md:group-hover:text-gray-600";
  }

  const colors = {
    music: "text-sky-600 md:text-gray-500 md:group-hover:text-sky-600",
    books: "text-cyan-600 md:text-gray-500 md:group-hover:text-cyan-600",
    writing: "text-indigo-600 md:text-gray-500 md:group-hover:text-indigo-600",
    anime: "text-red-600 md:text-gray-500 md:group-hover:text-red-600",
  };

  // Return the color classes or default to gray
  return colors[cat] || "text-gray-600 md:text-gray-500 md:group-hover:text-gray-600";
};

export const getDropdownTextClass = (category) => {
  const colors = {
    all: "group text-gray-600 group-hover:text-gray-400",
    music: "group text-sky-600 group-hover:text-sky-400",
    books: "group text-cyan-600 group-hover:text-cyan-400",
    writing: "group text-indigo-600 group-hover:text-indigo-400",
    anime: "group text-red-600 group-hover:text-red-400",
    sort: "group text-gray-500 group-hover:text-gray-400",
  };
  return colors[category] || colors.all;
};

export const getCircleStrokeClass = (category) => {
  const colors = {
    all: "stroke-gray-600 hover:stroke-gray-400",
    music: "stroke-sky-600 hover:stroke-sky-400",
    books: "stroke-cyan-600 hover:stroke-cyan-400",
    writing: "stroke-indigo-600 hover:stroke-indigo-400",
    anime: "stroke-red-600 hover:stroke-red-400",
  };
  return colors[category] || colors.all;
};

export const getCircleFillClass = (category) => {
  const colors = {
    all: "fill-gray-600 group-hover:fill-gray-400",
    music: "fill-sky-600 group-hover:fill-sky-400",
    books: "fill-cyan-600 group-hover:fill-cyan-400",
    writing: "fill-indigo-600 group-hover:fill-indigo-400",
    anime: "fill-red-600 group-hover:fill-red-400",
  };
  return colors[category] || colors.all;
};

export const getChevronFillClass = (category) => {
  const colors = {
    all: "fill-gray-600 group-hover:fill-gray-400",
    music: "fill-sky-600 group-hover:fill-sky-400",
    books: "fill-cyan-600 group-hover:fill-cyan-400",
    writing: "fill-indigo-600 group-hover:fill-indigo-400",
    anime: "fill-red-600 group-hover:fill-red-400",
    sort: "fill-gray-500 group-hover:fill-gray-400",
  };
  return colors[category] || colors.all;
};

export const getRatingTextClass = (category) => {
  const cat = Array.isArray(category) ? category[0] : category;
  const colors = {
    music: "text-sky-600 hover:text-sky-500",
    books: "text-cyan-600 hover:text-cyan-500",
    writing: "text-indigo-600 hover:text-indigo-500",
    anime: "text-red-600 hover:text-red-500",
  };
  return colors[cat] || "";
};

// Framer Motion animation variants
export const listItemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const linkMotionVariants = {
  rest: {
    paddingLeft: 0,
  },
  hover: {
    paddingLeft: 4,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut",
    },
  },
};

export const dateMotionVariants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
};

// Date formatting utility
export const formatDate = (date) => {
  const arr = date.split("-");
  return `${arr[1]}/${arr[0].slice(2, 4)}`;
};

// SVG Color values (hex codes for fill and stroke)
export const svgColors = {
  all: {
    stroke: "#4B5563", // gray-600
    strokeHover: "#9CA3AF", // gray-400
    fill: "#4B5563", // gray-600
    fillHover: "#9CA3AF", // gray-400
  },
  music: {
    stroke: "#0284C7", // sky-600
    strokeHover: "#38BDF8", // sky-400
    fill: "#0284C7", // sky-600
    fillHover: "#38BDF8", // sky-400
  },
  books: {
    stroke: "#0891B2", // cyan-600
    strokeHover: "#22D3EE", // cyan-400
    fill: "#0891B2", // cyan-600
    fillHover: "#22D3EE", // cyan-400
  },
  writing: {
    stroke: "#4F46E5", // indigo-600
    strokeHover: "#818CF8", // indigo-400
    fill: "#4F46E5", // indigo-600
    fillHover: "#818CF8", // indigo-400
  },
  anime: {
    stroke: "#DC2626", // red-600
    strokeHover: "#F87171", // red-400
    fill: "#DC2626", // red-600
    fillHover: "#F87171", // red-400
  },
  sort: {
    fill: "#6B7280", // gray-500
    fillHover: "#9CA3AF", // gray-400
  },
};

export const getSvgColors = (category) => {
  return svgColors[category] || svgColors.all;
};
