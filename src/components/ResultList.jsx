import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import RestaurantDetail from "./RestaurantDetail";

export default function ResultList({ title, data }) {
  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <RestaurantDetail
              image={item.image_url}
              name={item.name}
              rating={item.rating}
              review={item.review_count}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: { fontSize: 18, fontWeight: "bold" },
});
