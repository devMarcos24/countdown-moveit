import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/devMarcos24.png" alt="Marcos Taylor" />
      <div className="">
        <strong>Marcos Taylor</strong>
        <p>
          <img src="icons/level.svg" alt="alt" />
          Level 10000
        </p>
      </div>
    </div>
  );
}
