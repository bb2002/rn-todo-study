import React from 'react';
import { StyleSheet, View } from 'react-native';
import TabBarItem from './TabBarItem';

const TabBar = ({setType, type}) => {
    return (
        <View style={Style.container}>
            <TabBarItem type={type} title="All" setType={() => setType("All")} />
            <TabBarItem type={type} title="Active" setType={() => setType("Active")} />
            <TabBarItem type={type} title="Done" setType={() => setType("Done")} />
        </View>
    );
};

const Style = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#dddddd"
    }
})

export default TabBar;