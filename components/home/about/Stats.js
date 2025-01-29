import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React</span>
            <span className="chip">Next.js</span>
            <span className="chip">Tailwind</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Github</span>
            <span className="chip">Trello</span>
            <span className="chip">AWS</span>
            <span className="chip">Heroku</span>
            <span className="chip">Supabase</span>
            <span className="chip">Typescript</span>
            <span className="chip">Javascript</span>
            <span className="chip">Tanstack</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Supabase</span>
            <span className="chip">Clerk</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
