import React from "react";

type TareaProps = {
    tarea: string,
    borrarTarea: () => void
}
export const Tarea = ({tarea, borrarTarea}: TareaProps) => {
    return(
        <div className="task">
            <span>{tarea}</span>
            <button onClick={borrarTarea}>Borrar tarea</button>
        </div>
    );
}