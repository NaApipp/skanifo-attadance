"use client";

import React, { useState } from "react";
import styles from "../../styles/form.module.css";

export default function SiswaForm({
  onBack,
  onSubmit,
}: {
  onBack: () => void;
  onSubmit: (data: { email: string; role: string }) => void;
}) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("admin");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const em = email.trim();
    if (!em) {
      setError("Email wajib diisi.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(em)) {
      setError("Format email tidak valid.");
      return;
    }

    setError(null);
    onSubmit({ email: em, role });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label className={styles.label}>Nama</label>
        <input
          className="input"
          placeholder="Nama"
        />
      </div>
      <div>
        <label className={styles.label}>Username</label>
        <input
          className="input"
          placeholder="username"
        />
      </div>
      <div>
        <label className={styles.label}>Email</label>
        <input
          className="input"
          placeholder="Password"
        />
      </div>
      <div>
        <label className={styles.label}>Email</label>
        <input
          className="input"
          placeholder="Alamat (Opsional)"
        />
      </div>
      <div>
        <label className={styles.label}>NIP</label>
        <input
          className="input"
          placeholder="Nomor Induk Pendidik (Opsional) "
        />
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.actionsRow}>
        <button type="button" className={styles.outlineBtn} onClick={onBack}>
          Kembali
        </button>
        <button type="submit" className={styles.primaryBtn}>
          Simpan
        </button>
      </div>
    </form>
  );
}
