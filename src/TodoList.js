import TodoItem from "./TodoItem";
export default function TodoList(props) {
    const items = props.items;
    return (
        <div className="list">
            {items.map((item, index) =>
            <TodoItem item={item} key={index} />
            )}
        </div>
    );
}