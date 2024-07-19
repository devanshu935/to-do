import './App.css';
import { useEffect, useState } from 'react';
import data from './data';
import Tasks from './Tasks';
import { nanoid } from 'nanoid/non-secure';


function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [dragItem, setDragItem] = useState(null);

  useEffect(() => {
    function fetchTasks() {
      // setIsLoading(true);
      setTimeout(() => {
        setTasks(data);
        setIsLoading(false);
      }, 3000);
    }
    fetchTasks();
  }, []);

  const handleAddToDo = () => {
    const key = 'Pending';
    const copyTasks = { ...tasks };
    copyTasks[key].push({ id: nanoid(), isChecked: false, description: text });
    setTasks(copyTasks);
    setText('');
  }

  const handleDelete = (section, index) => {
    let copyTasks = { ...tasks };
    copyTasks[section].splice(index, 1);
    setTasks(copyTasks);
  }

  const handleToggle = (section, index) => {
    let targetSection = section === 'Pending' ? 'Completed' : 'Pending';
    let copyTasks = { ...tasks };
    let task = copyTasks[section].splice(index, 1);
    task[0].isChecked = !task[0].isChecked;
    copyTasks[targetSection].push(...task);
    setTasks(copyTasks);
  }

  const dragStart = (section, index) => {
    setDragItem({ section, index });
  }

  const dragOver = (e) => {
    e.preventDefault();
  }

  const drop = (targetSection) => {
    const { section, index } = dragItem;
    if(section === targetSection){
      setDragItem(null);
      return;
    }
    let copyTasks = {...tasks};
    let task = copyTasks[section].splice(index, 1);
    task[0].isChecked = !task[0].isChecked;
    copyTasks[targetSection].push(...task);
    console.log(copyTasks);
    setDragItem(null);
  }

  if (isLoading) {
    return 'Loading.........';
  }

  return (
    <>
      <div className='inputBox'>
        <input
          size={50}
          type="text"
          placeholder='Add new task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddToDo}>Add Task</button>
      </div>
      <div>
        {Object.keys(tasks).map((section) => (
          <Tasks
            key={section}
            items={tasks}
            section={section}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            dragStart={dragStart}
            dragOver={dragOver}
            drop={drop}
          />
        ))}
      </div>
    </>
  );
}

export default App;
