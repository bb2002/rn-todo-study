import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Input = ({inputValue, inputChange}) => {
    return (
        <View style={Style.inputContainer}>
            <TextInput
                style={Style.input}
                placeholder="당장 뭘 끝내야하지?.."
                placeholderTextColor="#CACACA"
                selectionColor="#666666"
                onChangeText={inputChange}
                value={inputValue} />
        </View>
    );
};

const Style = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 20,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowColor: "#000000",
        shadowOffset: { width: 2, height: 2 }
    },
    input: {
        height: 60,
        backgroundColor: "#ffffff",
        paddingHorizontal: 10
    }
})

export default Input;