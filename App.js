import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

const RootStack = createNativeStackNavigator({
  screens: {
    Search: SearchScreen,
    ResultShow: ResultShowScreen,
  },
  initialRouteName: "Search",
  screenOptions: { title: "Business Search" },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
