import Budget from "../../../public/budget.png";
import Website from "../../../public/website.gif";
import Museum from "../../../public/museum.png";

const projects = [
  {
    name: "Personal Website",
    description: "My personal website showcasing my projects and music",
    url: "https://www.nisharrk.me",
    image: Website,
    tech: ["NextJS", "React", "Tailwindcss"],
  },
  {
    name: "Budget Tracker",
    description:
      "A full stack application for tracking your expenses and income",
    url: "https://budget-client-phi.vercel.app/",
    image: Budget,
    tech: ["NextJS", "Node", "Express", "MongoDB", "Mongoose", "Tailwindcss"],
  },
  {
    name: "Metropolitan Museum of Art",
    description:
      "An artworks database site using the Metropolitan Museum of Art Collection API",
    url: "https://web422-assign6-phi.vercel.app/",
    image: Museum,
    tech: ["NextJS", "JWT", "Jotai", "SWR", "REST API", "Bootstrap"],
  },
];

export default projects;
