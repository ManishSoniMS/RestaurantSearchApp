import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const CustomSearchBar = ({ onSubmit }) => {
  return (
    <View style={style.backgroundStyle}>
      <Feather name="search" style={style.iconStyle} />
      <TextInput
        placeholder="search"
        style={style.inputStyle}
        // value={value}
        autoCapitalize="none"
        autoCorrect={false}
        // onChangeText={(text) => {
        //   onChangeValue(text);
        // }}
        onEndEditing={(text) => {
          onSubmit(text);
        }}s
      />
    </View>
  );
};

const style = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 15,
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
