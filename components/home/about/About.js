import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Tornike, If you haven&apos;t already gathered that
              by now. I&apos;m a Full Stack Engineer from Georgia, Rustavi. I 
              specialize in modern web development, building end-to-end solutions 
              with React, TypeScript, and Next.js on the frontend, and Node.js 
              with Express on the backend.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I currently work for LineDevLTD as a Full Stack Developer in 
              Tbilisi, Georgia. My tech stack includes React, TypeScript, Next.js, 
              Node.js, Express, and various database solutions like MongoDB with 
              Mongoose, PostgreSQL with DrizzleORM and Prisma, and Supabase. I 
              ensure code quality through comprehensive testing with Jest and 
              Supertest. I&apos;ve delivered multiple production applications 
              including company websites and client projects like Jujuna, Lano 
              Pet Shop, and TechGazzeta.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I still love to code. Any given Sunday
              you&apos;ll find me working on a new project, learning new tools,
              and mentoring our junior developers.
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
