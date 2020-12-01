import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Button = ({onSubmit}) => {
    return (
        <View style={Style.buttonContainer}>
            <TouchableOpacity
                underlayColor="#EFEFEF"
                style={Style.button}
                onPress={onSubmit}>
                <Text>저장</Text>
            </TouchableOpacity>
        </View>

    );
};

const Style = StyleSheet.create({
    buttonContainer: {
        alignItems: "flex-end"
    },
    button: {
        height: 50,
        paddingHorizontal: 20,
        backgroundColor: "#ffffff",
        width: 200,
        marginRight: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.1)",
        justifyContent: "center",
        alignItems: "center"
    },
    submit: {
        color: "#666666",
        fontWeight: "600"
    }
})

export default Button;