import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsLists";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const FilterResultsByPrice = price => {
        //price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <View style={styles.body}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={FilterResultsByPrice('$')}
                    title="Cost Effective"
                />
                <ResultsList
                    results={FilterResultsByPrice('$$')}
                    title="Bit Pricier"
                />
                <ResultsList
                    results={FilterResultsByPrice('$$$')}
                    title="Big Spender"
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "white",
        flex: 1
    }
});

export default SearchScreen;