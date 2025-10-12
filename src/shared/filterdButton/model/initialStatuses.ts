import type { TFilter } from "./types";

  export const statuses: { key: TFilter; label: string }[] = [
    { key: 'all', label: 'Все' },
    { key: 'completed', label: 'Завершённые' },
    { key: 'incompleted', label: 'Не завершённые' },
  ];