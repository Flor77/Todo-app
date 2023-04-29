import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";
import TodoItem from "./components/TodoItem";
import AddTodoForm from "./components/AddTodoForm";
import EditTodoForm from "./components/EditTodoForm";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(TODOS_MOCK);
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const addNewTask = (newTaskCard) => {
    setTodos((prevState) => [...prevState, newTaskCard]);
    setIsOpen(false);
  };

  const completeTodo = (matchId) => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === matchId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const removeTodo = (matchId) => {
    setTodos((prevState) => prevState.filter((item) => item.id !== matchId));
  };

  const onEdit = (matchId) => {
    const todoToEdit = todos.find((item) => item.id === matchId);
    setEditMode(todoToEdit);
    setIsOpen(true);
  };

  const editTodo = (newEditCard) => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === newEditCard.id) {
          return newEditCard;
        } else return item;
      })
    );
    setIsOpen(false);
  };

  return (
    <div className="App">
      <div className="app-container">
        <Card>
          <Button onClick={openModal}>Add +</Button>
          <h2>My todos</h2>
          <div className="list-container">
            {todos
              .filter((item) => item.completed === false)
              .map((item, index) => (
                <TodoItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  completed={item.completed}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                  onEdit={onEdit}
                  editTodo={editTodo}
                />
              ))}
          </div>

          <div className="separator"></div>

          <h2>Completed</h2>
          <div className="list-container">
            {todos
              .filter((item) => item.completed === true)
              .map((item, index) => (
                <TodoItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  completed={item.completed}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                  onEdit={onEdit}
                  editTodo={editTodo}
                />
              ))}
          </div>
        </Card>
      </div>
      <Modal onClose={closeModal} isOpen={isOpen} setIsOpen={setIsOpen}>
        {editMode ? (
          <EditTodoForm initialValues={editMode} addNewEdit={editTodo} />
        ) : (
          <AddTodoForm addNewTask={addNewTask} />
        )}
      </Modal>
    </div>
  );
}

export default App;
