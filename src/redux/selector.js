import { createSelector } from '@reduxjs/toolkit';


export const searchTextSelector = (state) => state.filters.search
export const statusSelector = (state) => state.filters.status
export const prioritySelector = (state) => state.filters.priority
export const todoListSelector = (state) => state.todoList
// export const todoListSelector = (state) => {
//     const searchText = searchTextSelector(state)
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(searchText)
//     })
//     return todoRemaining
// }

export const todoRemainingSelector = createSelector(
    todoListSelector, statusSelector, searchTextSelector, prioritySelector,
    (todoList, status, searchText, priority) => {
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priority.length
                    ? todo.name.includes(searchText) && priority.includes(todo.priority)
                    : todo.name.includes(searchText)
            } else {
                return todo.name.includes(searchText) &&
                    (status === "Completed"
                        ? todo.completed
                        : !todo.completed
                    ) &&
                    (priority.length
                        ? priority.includes(todo.priority)
                        : true
                    )
            }
        })
    })