export default function TodoItem(props) {
    function deleteItem() {
        props.deleteTodo(props.index);
    }
    return (
        <div>
            <label>
                <input type="checkbox" id="checkbox1" name="option1" value="value1" />
                {props.item}
            </label>
            <button onClick={deleteItem}>削除</button>
        </div>
    );
}