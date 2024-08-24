export default function TodoItem(props) {
    return (
        <div>
            <label>
                <input type="checkbox" id="checkbox1" name="option1" value="value1" />
                {props.item}
            </label>
        </div>
        
    );
}