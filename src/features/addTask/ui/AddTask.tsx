import { useRef, memo } from "react";
import styles from "./AddTask.module.css";

const AddTask = ({ onAddTask }: { onAddTask: (task: string) => void }) => {
  const ref = useRef<HTMLInputElement>(null);

  

  const onAddTaskHandler = () => {
    if (ref.current && ref.current.value.length > 0) {
      onAddTask(ref.current.value);
      ref.current.value = "";
    }
  };

  return (
    <div>
      <input type="text" name="new_task" placeholder="Add task" ref={ref} />
      <button className={styles.usual} onClick={onAddTaskHandler}>
        Add
      </button>
    </div>
  );
};

export default memo(AddTask);
