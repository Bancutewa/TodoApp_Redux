import { combineReducers } from "redux";
import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodoSlice";

// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action)
//     }
// }
// Su dung CombineReducers
const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer,
})

export default rootReducer;