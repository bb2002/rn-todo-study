import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const TodoButton = ({onPress, complete, name}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={Style.button}
            underlayColor="#efefef">
            <Text style={[Style.text, complete ? Style.complete : null, name === "Delete" ? Style.deleteButton : null]}>
                {name}
            </Text>
        </TouchableOpacity>
    );
};

const Style = StyleSheet.create({
    button: {
        alignSelf: "flex-end",
        padding: 7,
        borderColor: "#EDEDED",
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5
    },
    text: {
        color: "#666666"
    },
    complete: {
        color: "green",
        fontWeight: "bold"
    },
    deleteButton: {
        color: "rgba(175,47,47,1)"
    }
})

export default TodoButton;