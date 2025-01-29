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
    title: "LineDevLTD - Remote",
    position: "Middle Frontend Developer",
    time: "Aug 2024 - Present",
    location: "Tbilisi, Georgia",
    description:
      "I have worked on one company website and three additional projects: Jujuna, Lano Pet Shop, and the Georgian Esports Festival. These projects were officially ordered by the respective companies",
    tech: [
      "React",
      "Next.js",
      "Typescript",
      "Javascript",
      "Nodejs",
      "Supabase",
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
