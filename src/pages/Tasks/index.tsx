import { TaskCard } from "../../components/TaskCard";
import { Container } from "./style";

export function Tasks() {
  return (
    <Container>
      <h2>Lista</h2>

      <div className="taskContainer">
        <TaskCard
          data={{
            id: "1",
            title: "qwe",
            status: "completed",
            date: "2025-04-04",
            description: "qwe",
          }}
          onClick={() => {}}
        />
      </div>
    </Container>
  );
}
