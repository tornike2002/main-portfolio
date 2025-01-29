import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "LineDevLTD",
    imgSrc: "./project-imgs/linedev.png",
    code: "https://github.com/linesquad/linedevltd",
    projectLink: "https://www.linedevltd.com/",
    tech: ["React", "Javascript", "Supabase", "Aceternity UI", "TailwindCSS"],
    description:
      "Worked on login component for admin panel, and developed entire admin panel.",
    modalContent: (
      <>
        <p>
          LineDevLTD is a website for a development company. I Worked on login
          component for admin panel, and developed entire admin panel.
        </p>
        <p>
          We used best practices for our project, and we used Supabase for our
          database. handled the api with tanstack query. using custom hooks for
          best practices.
        </p>
      </>
    ),
  },
  {
    title: "Lano Pet Shop",
    imgSrc: "./project-imgs/lano.jfif",
    code: "https://github.com/linesquad/lano",
    projectLink: "lano.vercel.app",
    tech: ["NextJs", "Typescript", "Tailwind", "NodeJs", "shadcn"],
    description:
      "A pet shop website where you can buy pets and pet accessories. I worked on both admin panel and client side.",
    modalContent: (
      <>
        <p>
          The Lano Pet Shop is a website for a pet shop. which gives you the
          ability to buy pets, accessories and foods.
        </p>
        <p>
          I work primarily on the frontend, handling API with tanstack query and
          using custom hooks for best practices.
        </p>
        <p>
          The team in total consists of 5 developers and ui/ux designers. This
          is a passion project for all of us.
        </p>
        <p>
          Having a senior developer in the team, we were able to learn a lot
          about best practices and how to handle a project structure.
        </p>
      </>
    ),
  },
  {
    title: "Personal Trainer",
    imgSrc: "./project-imgs/gym.png",
    code: "https://github.com/tornike2002/FullstackGymProject",
    projectLink: "https://fullstack-gym-project.vercel.app/",
    tech: [
      "React",
      "Javascript",
      "Supabase",
      "Tanstack",
      "TailwindCSS",
      "emailjs",
    ],
    description:
      "The Group project was to create a personal trainer website. On this project i learnd how to handle API with tanstack query and how to use custom hooks.",
    modalContent: (
      <>
        <p>
          This project have admin panel too where you can add, delete and update
          the trainers data, images and stuff.
        </p>
        <p>
          Main concept of this project was to learn how to handle API with
          tanstack query and how to use custom hooks.
        </p>
      </>
    ),
  },
  {
    title: "Paint Reference 4",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Python", "FastAPI", "SQLAlchemy"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
];
