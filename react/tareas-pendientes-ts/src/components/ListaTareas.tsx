import React from "react";
import { Tarea } from "./Tarea";

type ListaTareasProps = {
    listaTareas: string[];
    borrarTarea: (index: number) => void;
}

export const ListaTareas = ({ listaTareas, borrarTarea }: ListaTareasProps) => {
    return (
        <>
            <div className="task-list">
                {listaTareas.map((tarea, index) => (
                    <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)}></Tarea>
                ))}
            </div>
        </>
    );
}