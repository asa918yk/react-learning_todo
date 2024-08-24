import { useState } from "react";
export default function TodoForm(props) {
    const [form, setForm] = useState({
        name: ''
    });
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    function submit(e) {
        if(!form.name) {return;}
        props.addTodo(form.name);
        setForm({
            name: ''
        });
    }
    return (
        <form>
            <div>
                <label htmlFor="name">タスクの内容：</label>
                <input id="name" name="name" type="text"
                    onChange={handleChange}
                    value={form.name} />
            </div>
            <div>
                <button type="button" onClick={submit}>
                タスクを追加</button>
            </div>
        </form>
    );
}