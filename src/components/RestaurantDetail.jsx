import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function RestaurantDetail({
  onPress,
  image,
  name,
  rating,
  review,
}) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { width: 256 },
  image: { height: 160, width: 256, backgroundColor: "grey" },
  title: { fontWeight: "bold" },
  subTitle: { color: "grey" },
});
