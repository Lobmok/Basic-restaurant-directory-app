import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {

    if (!results.length) {
        return null;
    }

    return <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
            horizontal
            data={results}
            keyExtractor={results => results.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => { navigation.navigate("ResultsShow", { id: item.id }) }}>
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                )
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    containerStyle: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    }
})

export default withNavigation(ResultsList);