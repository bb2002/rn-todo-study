import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from "react-native"

const Header = () => {
    return (
        <View style={Style.header}>
            <Text style={Style.headerText}>볼봇 투두</Text>
        </View>
    );
};

const Style = StyleSheet.create({
    header: {
        marginTop: 80
    },
    headerText: {
        textAlign: "center",
        fontSize: 72,
        color: "rgba(175,47,47,0.25)",
        fontWeight: "100"
    }
})

export default Header;