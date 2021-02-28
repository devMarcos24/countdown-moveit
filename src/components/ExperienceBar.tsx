import styles from "../styles/components/ExperienceBar.module.css";

const percente = 40;
const experience = (600 * percente) / 100;

export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: percente + "%" }} />
        <span
          className={styles.currentExperience}
          style={{ left: percente + "%" }}
        >
          {experience} xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}
