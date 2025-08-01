import { initialState } from "./initial-state";
import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO, TOGGLE_IMPORTANT } from "./actions";

import shortid from "shortid";

function saveStateToBrowser(state) {
    window.localStorage.setItem("react-redux-todo", JSON.stringify(state));
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO: {
            const { title } = action.payload;

            const newState = {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: shortid(),
                        title,
                        completed: false,
                        important: false
                    }
                ]
            }
            saveStateToBrowser(newState);
            return newState;
        }
        case TOGGLE_COMPLETED: {
            const newTodos = state.todos.map((todo) => 
                todo.id === action.payload.id ? {
                    ...todo,
                    completed: !todo.completed
                } : todo
            );
            const newState = {
                ...state,
                todos: newTodos,
            }
            saveStateToBrowser(newState);
            return newState;
        }
        case DELETE_TODO: {
            const { id } = action.payload;
            const newTodos = state.todos.filter((todo) => todo.id !== id)
            const newState = {
                ...state,
                todos: newTodos,
            }
            saveStateToBrowser(newState);
            return newState;
        }
        case TOGGLE_IMPORTANT: {
            const newTodos = state.todos.map((todo) => 
                todo.id === action.payload.id ? {
                    ...todo,
                    important: !todo.important
                } : todo
            );
            const newState = {
                ...state,
                todos: newTodos,
            }
            saveStateToBrowser(newState);
            return newState;
        }
    default:
        return state;
    }
}
export default reducer;