import { useState } from "react";
import styles from "./AgeGate.module.css";

export default function AgeGate({ verified, onVerify }) {
  const [denied, setDenied] = useState(false);

  return (
    <div
      className={styles.gate}
      style={{ opacity: verified ? 0 : 1, pointerEvents: verified ? "none" : "all" }}
    >
      <div className={styles.box}>
        <div className={styles.ornament}>
          <div className={styles.line} />
          <div className={styles.diamond} />
          <div className={styles.line} />
        </div>

        <div className={styles.logo}>Handshake Wines</div>
        <div className={styles.rule} />

        {!denied ? (
          <>
            <p className={styles.eyebrow}>Welcome</p>
            <p className={styles.question}>
              Are you of legal drinking age<br />in your country of residence?
            </p>
            <div className={styles.btns}>
              <button className={`${styles.btn} ${styles.btnYes}`} onClick={onVerify}>
                Yes, I am
              </button>
              <button className={`${styles.btn} ${styles.btnNo}`} onClick={() => setDenied(true)}>
                Not yet
              </button>
            </div>
          </>
        ) : (
          <p className={styles.denied}>
            We look forward to welcoming you<br />
            when you're of legal drinking age.
          </p>
        )}
      </div>
    </div>
  );
}
