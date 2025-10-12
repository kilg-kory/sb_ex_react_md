import TaskListWidget from "widgets/taskList";
import styles from "./TaskPage.module.css";
export default () => (
  <div className={styles.taskPage}>
    <h1>Задачи</h1>
    <TaskListWidget />
  </div>
);
