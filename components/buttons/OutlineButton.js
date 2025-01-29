import styles from "./outlinebutton.module.scss";

export const OutlineButton = ({ children, file }) => {
  return (
    <a href={file} download={file} className={styles.outlineButton}>
      {children}
    </a>
  );
};
