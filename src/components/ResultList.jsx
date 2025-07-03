import { View, Text, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RestaurantDetail from "./RestaurantDetail";

export default function ResultList({ title, data }) {
  if (!data.length) {
    return null;
  }

  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
      {data.length !== 0 ? (
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item) => item.id}
          style={styles.flatList}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={(item) => <View style={{ width: 15 }} />}
          renderItem={({ item }) => {
            return (
              <RestaurantDetail
                onPress={() => {
                  navigation.navigate("ResultShow", { id: item.id });
                }}
                image={item.image_url}
                name={item.name}
                rating={item.rating}
                review={item.review_count}
              />
            );
          }}
        />
      ) : (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>No Restaurant Found!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: { fontSize: 18, fontWeight: "bold", paddingHorizontal: 15 },
  flatList: { paddingHorizontal: 15, paddingVertical: 8 },
  noDataContainer: {
    height: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: { fontSize: 16, fontWeight: "bold", color: "grey" },
});
