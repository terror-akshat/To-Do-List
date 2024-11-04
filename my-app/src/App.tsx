import { useState } from "react";
import "./App.css";
import InputField from "./component/InputField";
import { Todo } from "./component/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handelAdd = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo,
          isComplete: false,
        },
      ]);
      setTodo("")
    }
  };

  return (
    <div className="container">
      <span className="header">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handelAdd={handelAdd} />
      {/* <TodoList/> */}
      {
        todos.map((t)=>(
          <li>{t.todo}</li>
        ))
      }
    </div>
  );
};

export default App;
