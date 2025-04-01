import girth from "../../../public/girth.png";
import Todo from "../../../public/todo.png";
import Travellog from "../../../public/travellog.png";

const projects = [
  {
    name: "girthOS",
    description: "Body measurements tracker",
    url: "https://girthos.vercel.app/",
    image: girth,
    tech: ["NextJS", "MongoDB", "Mongoose", "TailwindCSS", "ApexCharts"],
  },
  {
    name: "Travel Log",
    description: "Places travelled logger",
    url: "https://travel-log-rosy.vercel.app/",
    image: Travellog,
    tech: [
      "NextJS",
      "TypeScript",
      "MapBox",
      "Tailwindcss",
      "React-Leaflet",
      "Daisy-UI",
    ],
  },
  {
    name: "To-Do App",
    description: "Tasks tracker",
    url: "https://to-do-coral-nine.vercel.app/",
    image: Todo,
    tech: ["React", "Chakra-UI"],
  },
];

export default projects;
