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
              by now. I&apos;m a Developer turned Frontend Development from
              Georgia, Rustavi. I specialize in the Frontend, primarily React
              and Nextjs, but love building with whatever tools are right for
              the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I currently work for LineDevLTD on Middle Frontend Developer
              Position. This company is based in Tbilisi, Georgia. I have worked
              on one company website and three additional projects: Jujuna, Lano
              Pet Shop, and the Georgian Esports Festival. These projects were
              officially ordered by the respective companies. Based on the work
              I've done, I've gained experience to use Best Practices and to
              work with the latest technologies.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I still love to Code. Any given Sunday you'll
              find me working on a new project, learning new tools and Mentoring
              our Junior Developers.
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
