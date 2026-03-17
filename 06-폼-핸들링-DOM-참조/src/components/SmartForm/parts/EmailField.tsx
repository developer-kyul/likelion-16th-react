import { useId } from "react";
import S from "../SmartForm.module.css";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function EmailField({ value, onChange }: Props) {
  const filedId = useId();

  return (
    <div className={S.field}>
      <label htmlFor={filedId} className={S.label}>
        이메일
      </label>
      <input
        id={filedId}
        type="email"
        placeholder="user@email.com"
        className={S.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {/* <p role="alert" className={S.errorMessage}>
        {error}
      </p> */}
    </div>
  );
}
