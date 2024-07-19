export default function Tasks({ items, section, handleDelete, handleToggle, dragStart, dragOver, drop }) {

    return (
        <div className="task-section">
            <h2>{section}</h2>
            <ul className="task-list">
                {items[section].map((item, index) => (
                    <li
                        draggable
                        key={item.id}
                        onDragStart={() => { dragStart(section, index) }}
                        onDragOver={(e) => { dragOver(e) }}
                        onDrop={() => { drop(section) }}
                    >
                        <label>
                            <input type="checkbox" checked={item.isChecked} onChange={() => handleToggle(section, index)} />
                            {' '}
                            {item.description}
                        </label>
                        <button onClick={() => handleDelete(section, index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

