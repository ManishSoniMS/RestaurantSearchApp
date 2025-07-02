import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";

export default function RestaurantDetail({ image, name, rating, review }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        onError={() => {
          return <Feather name="error" size={30} />;
        }}
      />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subTitle}>
        {rating} Stars, {review} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: 256, marginHorizontal: 15 },
  image: { height: 160, width: 256, backgroundColor: "grey" },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    color: "grey",
  },
});
