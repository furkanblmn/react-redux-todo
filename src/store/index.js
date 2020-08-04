import { createStore, combineReducers } from "redux";
import TodoReducer from './reducers/todo'

const reducers = combineReducers({
    todo_item: TodoReducer
})

const store = createStore(reducers);

export default store;