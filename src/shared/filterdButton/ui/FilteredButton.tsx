import type { TFilter } from "shared/filterdButton/index";

import { statuses } from "../model/initialStatuses";
import styles from "./FilteredButton.module.css";

export default ({
  value,
  onClick,
}: {
  value: string;
  onClick: (value: TFilter) => void;
}) => {
  return (
    <div>
      {statuses.map(({ key, label }) => (
        <button
          key={key}
          className={key === value ? styles.active : styles.usual}
          onClick={() => onClick(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
