import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import TextArea from "./TextArea";

const AddTodoForm = (props) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.random().toString(36).slice(2, 10);
    const newTaskCard = {
      id: id,
      title: taskTitle,
      description: taskDescription,
      completed: false,
    };

    props.addNewTask(newTaskCard);
    setTaskTitle("");
    setTaskDescription("");
  };

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  return (
    <Card>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        <Input
          value={taskTitle}
          onChange={handleTitleChange}
          placeholder="Title"
          type="text"
        />
        <TextArea
          value={taskDescription}
          onChange={handleDescriptionChange}
          placeholder="Description"
        />
        <Button type="submit">Create</Button>
      </form>
    </Card>
  );
};

export default AddTodoForm;
