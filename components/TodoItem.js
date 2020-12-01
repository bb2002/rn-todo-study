import React from 'react';
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';
import TodoButton from "./TodoButton"

const TodoItem = ({todo, toggleComplete, deleteTodo}) => {
    return (
        <View style={Style.todoContainer}>
            <Text style={[Style.todoText, todo.complete ? Style.todoComplete : null]}>
                {todo.title}
            </Text>
            <TodoButton name="Done" complete={todo.complete} onPress={() => toggleComplete(todo.index)} />
            <TodoButton name="Delete" onPress={() => deleteTodo(todo.index)} />
        </View>
    );
};

const Style = StyleSheet.create({
    todoContainer: {
        marginHorizontal: 20,
        backgroundColor: "#ffffff",
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: "#ededed",
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: "#000000",
        shadowOffset: {width: 2, height: 2},
        flexDirection: "row",
        alignItems: "center"
    },
    todoText: {
        fontSize: 17,
        flex: 1
    },
    todoComplete: {
        textDecorationLine: "line-through",
        
    }
})

export default TodoItem;