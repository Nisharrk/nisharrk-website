import Budget from "../../../public/budget.png";
import Iamlazy from "../../../public/iamlazy.png";
import Museum from "../../../public/museum.png";
import Todo from "../../../public/todo.png";
import Travellog from "../../../public/travellog.png";

const projects = [
  // {
  //   name: "IAMLAZY",
  //   description: "A URL shortener",
  //   url: "https://drab-gray-donkey-vest.cyclic.app/",
  //   image: Iamlazy,
  //   tech: ["Node", "Express", "MongoDB", "HTML", "CSS"],
  // },
  {
    name: "Travel Log",
    description:
      "A full stack application for to log the places I have travelled",
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
    description: "A react application for tracking your tasks",
    url: "https://to-do-coral-nine.vercel.app/",
    image: Todo,
    tech: ["React", "Chakra-UI"],
  },
  {
    name: "Metropolitan Museum of Art",
    description:
      "An artworks database site using the Metropolitan Museum of Art Collection API",
    url: "https://web422-assign6-phi.vercel.app/",
    image: Museum,
    tech: ["NextJS", "JWT", "Jotai", "SWR", "REST API", "Bootstrap"],
  },
  {
    name: "Budget Tracker",
    description:
      "A full stack application for tracking your expenses and income",
    url: "https://budget-client-phi.vercel.app/",
    image: Budget,
    tech: ["NextJS", "Node", "Express", "MongoDB", "Mongoose", "Tailwindcss"],
  },
];

export default projects;
