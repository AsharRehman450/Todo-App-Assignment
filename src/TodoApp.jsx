import React, { useState } from 'react';
import TodoAppCss from "../src/TodoApp.module.css"

const TodoApp = () => {
   const [tasks, setTasks] = useState([]); 
   const [addItem, setAddItem] = useState(""); 
   const [editingTaskIndex, setEditingTaskIndex] = useState(null); 
   const handleChange = (e) => {
       setAddItem(e.target.value);
   };

   const handleAddBtn = () => {
       if (addItem.trim()) {
           if (editingTaskIndex !== null) {

            const updatedTasks = [...tasks];
               updatedTasks[editingTaskIndex] = addItem; 
               setTasks(updatedTasks);
               setEditingTaskIndex(null); 
           } else {
               setTasks([...tasks, addItem]);
           }
           setAddItem(""); 
       }
   };

   const handleDeleteTask = (index) => {
       const updatedTasks = [...tasks];
       updatedTasks.splice(index, 1);
       setTasks(updatedTasks);
   };

   const handleEditTask = (index) => {
       setAddItem(tasks[index]); 
       setEditingTaskIndex(index);
   };

   const HandleDeleteAllBtn = () => {
    setTasks([]);
    console.log("HandleDeleteAllBtn is clicked")
   }

   return (
    <div className={TodoAppCss.container}>
        <h1 className={TodoAppCss.header}>Todo App</h1>
        <input
            type="text"
            placeholder="Add or Edit Task Here"
            value={addItem}
            onChange={handleChange}
            className={TodoAppCss.inputField}
        />
        <button 
            onClick={handleAddBtn} 
            className={TodoAppCss.button}
        >
            {editingTaskIndex !== null ? "Update Task" : "Add Here"}
        </button>
        <button 
            onClick={HandleDeleteAllBtn} 
            className={TodoAppCss.button}
        >
            Delete All
        </button>

        <div className={TodoAppCss.taskList}>
            {tasks.map((task, index) => (
                <div key={index} className={TodoAppCss.taskItem}>
                    <span className={TodoAppCss.taskText}>{task}</span>
                    <button 
                        onClick={() => handleEditTask(index)} 
                        className={`${TodoAppCss.button} ${TodoAppCss.editButton}`}
                    >
                        Edit
                    </button>
                    <button 
                        onClick={() => handleDeleteTask(index)} 
                        className={`${TodoAppCss.button} ${TodoAppCss.deleteButton}`}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    </div>
)
};
export default TodoApp;
