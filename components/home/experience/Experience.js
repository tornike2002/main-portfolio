import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Tech Gazzeta Georgia - Remote",
    position: "Full Stack Engineer",
    time: "Mar 2025 - May 2025",
    location: "Tbilisi, Georgia",
    description:
      "Part-time Full Stack Engineer role at Tech Gazzeta Georgia, working on modern web development projects and delivering high-quality solutions.",
    tech: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Tailwind",
      "Tanstack",
    ],
  },
  {
    title: "LineDevLTD - Remote",
    position: "Full Stack Engineer",
    time: "Aug 2024 - Present",
    location: "Tbilisi, Georgia",
    description:
      "I have successfully delivered 7 real-time projects including company websites and client applications: Jujuna, Lano Pet Shop, TechGazzeta, and the Georgian Esports Festival. These projects were officially commissioned by their respective companies and are currently in production.",
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "DrizzleORM",
      "Neon",
      "Prisma",
      "Supabase",
      "Jest",
      "Supertest",
      "JavaScript",
      "Tanstack",
      "Tailwind",
    ],
  },
  {
    title: "LegendsHub - Remote",
    position: "Junior React Developer",
    time: "Jan 2024 - Jul 2024",
    location: "Tbilisi, Georgia",
    description:
      "I have worked on LegendsHub, a startup League of Legends hub in Georgia that was featured on the YouTube channel Korvina.",
    tech: ["React", "Python", "Django", "Javascript", "Ant Design", "Tailwind"],
  },
];
