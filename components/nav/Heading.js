import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton file={"/tornike-butiashvili.pdf"}>My resume</OutlineButton>
    </header>
  );
};
