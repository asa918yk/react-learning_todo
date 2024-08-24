export default function TodoItem(props) {
    function deleteItem() {
        props.deleteTodo(props.index);
    }
    function changeStatus(e) {
        props.completeTodo(props.index, e.target.checked);
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={props.isComplete} onChange={changeStatus} />
                {props.name}
            </label>
            <button onClick={deleteItem}>削除</button>
        </div>
    );
}