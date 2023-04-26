import { useState } from "react";
import Card from "./Card";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";

const EditTodoForm = (props) => {
  const [taskTitle, setTaskTitle] = useState(props.initialValues.title);
  const [taskDescription, setTaskDescription] = useState(
    props.initialValues.description
  );

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const newEditCard = {
      id: props.initialValues.id,
      title: taskTitle,
      description: taskDescription,
      completed: props.initialValues.completed,
    };

    props.addNewEdit(newEditCard);
  };

  return (
    <Card>
      <h2>Edit Todo</h2>
      <form onSubmit={handleEdit}>
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
        <Button type="submit">Edit</Button>
      </form>
    </Card>
  );
};

export default EditTodoForm;
