import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomSearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [searchApi, result, errorMessage] = useRestaurants();

  const filterResultByPrice = (price) => {
    return result.filter((data) => {
      return data.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <CustomSearchBar onSubmit={(val) => searchApi({ searchQuery: val })} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList title="Cost Effective" data={filterResultByPrice("$")} />
        <ResultList title="Bit Pricier" data={filterResultByPrice("$$")} />
        <ResultList title="Big Spender" data={filterResultByPrice("$$$")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});

export default SearchScreen;
