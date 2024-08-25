import { useState } from "react";
import TodoItem from "./TodoItem";
export default function TodoList(props) {
    const [category, setCategory] = useState('all');
    const items = props.items;
    function showAll() {
        setCategory('all');
    }
    function showIncomplete() {
        setCategory('incomplete');
    }
    function showComplete() {
        setCategory('complete');
    }
    return (
        <>
            <div className="filter">
                <button onClick={showAll}>全て表示</button>
                <button onClick={showIncomplete}>未完了のタスクのみ表示</button>
                <button onClick={showComplete}>完了のタスクのみ表示</button>
            </div>
            <div className="list">
                {items.map((item, index) =>(category === 'all' || (category === 'incomplete' && item.isComplete === false) || (category === 'complete' && item.isComplete === true)) &&
                <TodoItem {...item} index={index} key={index} deleteTodo={props.deleteTodo} completeTodo={props.completeTodo} />
                )}
            </div>
        </>
    );
}