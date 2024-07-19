export default function Task({ index, item, handleToggle, section }) {
    return (
        <li key={item.id} draggable>
            <label>
                <input type="checkbox" checked={item.isChecked} onChange={() => handleToggle(section, index)} />
                {' '}
                {item.description}
                <button style={{ position: 'absolute', left: '300px' }}>Delete</button>
            </label>
        </li>
    );
}