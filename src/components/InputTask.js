import React, { useState } from "react";
import {
  Select,
  Input,
  Button,
  Grid,
  Header,
  Icon,
  FormSelect,
} from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";

const options = [
  { key: "deporte", text: "Deporte", value: "deporte" },
  { key: "casa", text: "Casa", value: "casa" },
  { key: "oficina", text: "Oficina", value: "oficina" },
  { key: "mascotas", text: "Mascotas", value: "mascotas" },
  { key: "familia", text: "Familia", value: "familia" },
  { key: "otra", text: "Otras", value: "otra" },
];

export const InputTask = (props) => {
  const [task, setTask] = useState({
    idTask: "",
    taskName: "",
    categoryTask: "",
  });

  const [error, setError] = useState(false);

  //Destructuring de props para poder usar el CREATETASK
  const { createTask } = props;

  const onChangeTask = (e) => {
    // con este seteo le decimos que guarde los valores en TASK y a la vez cambie
    // el e.target.name por el e.target.value
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeCategoryTask = (e, data) => {
    setTask({
      ...task,
      [data.name]: data.value,
    });
  };

  const onSubmitTask = (e) => {
    // Tenemos que conseguir que NO recargue la pagina
    e.preventDefault();
    // Validación de todos los inputs vacios
    if (task.taskName.trim() === "" || task.categoryTask.trim() === "") {
      setError(true);
      return;
    }
    // eliminar mensaje previo
    setError(false);
    // asignar un ID
    //Instalando previamente la libreria uuid que te genera ID automaticos
    task.idTask = uuidv4();
    // crear la tarea
    createTask(task);
    // limpiar los inputs
    setTask({
      idTask: "",
      taskName: "",
      categoryTask: "",
    });
  };
  return (
    <>
      <Grid centered columns={2}>
        <Input type="text" action>
          <Input
            size="small"
            icon="add"
            placeholder="¿Qué tienes que hacer?"
            iconPosition="left"
            name="taskName"
            value={task.taskName}
            onChange={onChangeTask}
          />
          <Select
            compact
            options={options}
            className="select-form-task"
            name="categoryTask"
            placeholder="Categoria"
            value={task.categoryTask}
            onChange={onChangeCategoryTask}
          />
          <Button type="submit" color="violet" onClick={onSubmitTask}>
            Añadir tarea
          </Button>
        </Input>
      </Grid>
      {error && (
        <Grid centered>
          <Header as="h4" color="red" className="alert-error-form">
            <Icon name="close" />
            <Header.Content>La tarea es obligatoria</Header.Content>
            <Icon name="close" />
          </Header>
        </Grid>
      )}
    </>
  );
};
