import React from "react";
import { Todo } from "../models/Todo";

interface TodoListItemProps {
    todo: Todo
}

const TodoListItem = (props: TodoListItemProps) => {
    return (
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input className="uk-checkbox"
                        type="checkbox"
                    />
                </label>
            </td>
            {/* propriedade do uikit */}
            <td className="uk-width-expand">
                {props.todo.title}
            </td>
            {/* propriedade do uikit */}
            <td className="uk-width-auto">
                <button
                    className="uk-icon-button uk-button-danger"
                    uk-icon="trash">
                </button>
            </td>
        </tr>
    );
}

export default TodoListItem;