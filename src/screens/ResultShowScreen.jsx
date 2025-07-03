import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";
import yelp from "../api/yelp";

const ResultShowScreen = ({ route }) => {
  const { id } = route.params;
  console.log("id :", id);

  const [restaurant, setRestaurant] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getRestaurant = async () => {
    try {
      const response = await yelp.get(`/businesses/${id}`);
      setRestaurant(response.data);
    } catch (e) {
      console.log("API Res :: error ::", e);
      setErrorMessage(`${e}`);
    }
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <View style={style.container}>
      {errorMessage !== "" ? (
        <Text>{errorMessage}</Text>
      ) : restaurant === null ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text>{restaurant.name}</Text>
          <FlatList
            data={restaurant.photos}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={style.image} />
            )}
          />
        </>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  activityIndicator: {},
  image: { height: 200, width: "100%" },
});

export default ResultShowScreen;
