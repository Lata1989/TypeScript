import React, { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {

    const [nuevaTarea, setnuevaTarea] = useState<string>('');
    const [listaTareas, setListaTareas] = useState<string[]>([]);

    const handleAddTask = () => {
        if (nuevaTarea.trim() === '') {
            return;
        } else {
            setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea]);
            setnuevaTarea('');
        }
    };

    const handleBorrarTarea = (index: number) => {
        setListaTareas(tareas => tareas.filter((_, i) => i !== index))
    };

    return (
        <div>
            <h1>Lista de tareas:</h1>
            <input
                type="text"
                value={nuevaTarea}
                onChange={(e) => setnuevaTarea(e.target.value)}
                placeholder="Ingrese la tarea..."
            >
            </input>
            <button onClick={handleAddTask}>Agregar tarea</button>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
        </div>
    );
}