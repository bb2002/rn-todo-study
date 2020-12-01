import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const TabBarItem = ({border, title, selected, setType, type}) => {
    return (
        <TouchableOpacity
            underlayColor="#EFEFEF"
            onPress={setType}
            style={[
                Styles.item, 
                selected ? Styles.selected: null,
                border ? Styles.border : null,
                type === title ? Styles.selected : null
            ]}>
            <Text style={[Styles.itemText, type === title ? Styles.bold : null]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const Styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    border: {
        borderLeftWidth: 1,
        borderLeftColor: "#DDDDDD"
    },
    itemText: {
        color: "#777777",
        fontSize: 16
    },
    selected: {
        backgroundColor: "#ffffff"
    },
    bold: {
        fontWeight: "bold"
    }
})

export default TabBarItem;