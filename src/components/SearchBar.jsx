import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const CustomSearchBar = ({ onSubmit }) => {
  return (
    <View style={style.backgroundStyle}>
      <Feather name="search" style={style.iconStyle} />
      <TextInput
        placeholder="search"
        style={style.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={(text) => {
          onSubmit(text);
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default CustomSearchBar;
