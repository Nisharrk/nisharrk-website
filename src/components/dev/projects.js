import Budget from "../../../public/budget.png";
import Website from "../../../public/website.gif";

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
];

export default projects;
