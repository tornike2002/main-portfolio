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
    title: "Lawyer-node",
    imgSrc: "./project-imgs/lawyer.png",
    code: "https://github.com/tornike2002/lawyer-node",
    projectLink: "https://github.com/tornike2002/lawyer-node",
    tech: [
      "Node.js",
      "Typescript",
      "Express",
      "MongoDB",
      "Mongoose",
      "Eslint",
      "Prettier",
      "Swagger",
      "Jest",
      "SuperTest",
      "Slugify",
      "JWT",
      "Bcrypt.js",
      "Dotenv",
      "Zod",
    ],
    description: `I have been building this Lawyer project for 3 days, learned how to create
models , how to build system designs of restAPI, how to implement middlewares, validators, handlers , routes , filtering, searching, authorization,
authentication, pagination, testing, integration tests also comments and nested comments for replies.`,
    modalContent: (
      <>
        <p>
          This project have admin panel too where you can add, delete and update
          the lawyers data, images and stuff.
        </p>
        <p>
          Main concept of this project was to learn how to build system designs
          of restAPI, how to implement middlewares, validators, handlers ,
          routes , filtering, searching, authorization, authentication,
          pagination, testing, integration tests also comments and nested
          comments for replies.
        </p>
      </>
    ),
  },
  {
    title: "Tech Gazzeta Georgia",
    imgSrc: "project-imgs/techgazzeta.png",
    code: "https://www.github.com",
    projectLink: "https://www.techgazzeta.org/",
    tech: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Tailwind",
      "Tanstack",
    ],
    description:
      "I worked on the Tech Gazzeta Georgia website, which features three distinct panels: admin, user, and holder. Users can add comments and save favorites, admins handle posts and account management with reports, while holders manage categories ,tags e.t.c",
    modalContent: (
      <>
        <p>
          Developed and maintained "TechGazeta", a full-stack technology blog
          platform featuring a custom admin panel, user profile management, and
          a dynamic post system.
        </p>
        <p>
          Built single post pages with real-time commenting functionality,
          Next/Previous post navigation, infinite scroll with skeleton loading
          animations, and search, filtering, and sorting capabilities.
        </p>
        <p>
          Integrated TanStack Query for efficient data fetching, caching, data
          hashing, and query invalidation to ensure real-time data consistency.
        </p>
        <p>
          Engineered custom React hooks to modularize and optimize data
          handling. Focused on delivering a responsive, high-performance, and
          seamless user experience across frontend and backend.
        </p>
      </>
    ),
  },
  {
    title: "Stripe Payment Integration",
    imgSrc: "./project-imgs/stripe.png",
    code: "https://github.com/tornike2002/stripe-node",
    projectLink: "https://github.com/tornike2002/stripe-node",
    tech: [
      "Stripe API",
      "Typescript",
      "Nodejs",
      "Express",
      "Mongoose",
      "MongoDB",
      "Redis Upstash",
      "Cookies",
      "RateLimiter",
      "JWT",
    ],
    description: `This is my new project about Stripe where i implement Stripe checkout
Monthly and Yearly subscriptions, Stripe customer billing portal, integrated with my own mongoose MongoDB database. with crud operations and authentication and authorization with cookies and rate limiting with upstash redis.`,
    modalContent: (
      <>
        <p>
          This project demonstrates a complete Stripe payment integration with
          advanced features including monthly and yearly subscription
          management.
        </p>
        <p>
          The main learning outcomes include implementing secure payment flows,
          managing customer billing portals, building robust authentication with
          JWT and cookies, and implementing rate limiting with Redis for
          enhanced security.
        </p>
      </>
    ),
  },
  {
    title: "LineDev-node",
    imgSrc: "./project-imgs/lind.png",
    code: "https://github.com/linesquad/linedev-backend",
    projectLink: "https://github.com/linesquad/linedev-backend",
    tech: [
      "Node.js",
      "Typescript",
      "Express",
      "MongoDB",
      "Cookies",
      "JWT",
      "Bcrypt.js",
      "Dotenv",
      "Zod",
      "Slugify",
    ],
    description:
      "The Group project was to create a personal trainer website. On this project i learnd how to handle API with tanstack query and how to use custom hooks.",
    modalContent: (
      <>
        <p>
          LineDevLTD website backend featuring multiple dashboard panels for
          different user roles: client, junior, middle, and senior developers.
          Includes a comprehensive task management system with Jest testing
          implementation.
        </p>
        <p>
          The project incorporates pricing information management, detailed
          documentation of development processes, and a student badge system for
          tracking achievements and progress.
        </p>
      </>
    ),
  },
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
    title: "Line Todo Vanilla Node",
    imgSrc: "./project-imgs/todo.png",
    code: "https://github.com/tornike2002/linetodo-node",
    projectLink: "https://github.com/tornike2002/linetodo-node",
    tech: ["Vanilla Node", "MongoDB", "Winston", "JWT", "Bcrypt.js", "Dotenv"],
    description:
      "This is my first project where i implement vanilla node with mongodb and jwt authentication and authorization.",
    modalContent: (
      <>
        <p>
          This project have admin panel too where you can add, delete and update
          the todos data.
        </p>
        <p>
          Main concept of this project was to learn how to handle API with
          vanilla node and mongodb.
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
];
