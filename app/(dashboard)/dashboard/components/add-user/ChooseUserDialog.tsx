"use client";

// import styles from "../styles/form.module.css";

import styles from "../../styles/form.module.css"
export type UserType = "siswa" | "admin";

export default function ChooseUserDialog({
  onPick,
}: {
  onPick: (type: UserType) => void;
}) {
  return (
    <div className={styles.centerRow}>
      <button className={styles.outlineBtn} onClick={() => onPick("siswa")}>
        Siswa
      </button>
      <button className={styles.outlineBtn} onClick={() => onPick("admin")}>
        Admin
      </button>
    </div>
  );
}
