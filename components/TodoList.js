import React from 'react';
import TodoItem from './TodoItem';
import {
    View
} from "react-native"

const TodoList = ({todos, toggleComplete, deleteTodo, type}) => {
    return (
        <View>
            {
                todos.map((todo, i) => {
                    let item = <TodoItem 
                                    key={i} 
                                    todo={todo}
                                    toggleComplete={toggleComplete}
                                    deleteTodo={deleteTodo} />

                    switch(type) {
                        case "All":
                            return item;
                        case "Done": 
                            if(todo.complete) return item;
                            else return null;
                        case "Active": 
                            if(!todo.complete) return item;
                            else return null;
                    }
                })
            }
        </View>

    );
};

export default TodoList;