import Budget from "../../../public/budget.png";
import Iamlazy from "../../../public/iamlazy.png";
import Museum from "../../../public/museum.png";
import Todo from "../../../public/todo.png";

const projects = [
  {
    name: "IAMLAZY",
    description: "A URL shortener",
    url: "https://drab-gray-donkey-vest.cyclic.app/",
    image: Iamlazy,
    tech: ["Node", "Express", "MongoDB", "HTML", "CSS"],
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
    name: "To-Do App",
    description: "A react application for tracking your tasks",
    url: "https://to-do-coral-nine.vercel.app/",
    image: Todo,
    tech: ["React", "Chakra-UI"],
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
