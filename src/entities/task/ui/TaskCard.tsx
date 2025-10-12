import type { ITask } from 'entities/task/model/types';

import styles from './TaskCard.module.css';

export default function TaskCard({
  task,
  onChange,
  onDelete,
}: {
  task: ITask;
  onChange: (task: ITask) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={(e) => onChange({ ...task, completed: e.target.checked })}
      />
      <p>{task.title}</p>
      <div className={styles.delete}><a onClick={() => onDelete(task.id)}>X</a></div>
    </div>
  );
}
