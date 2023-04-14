import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Header from "./src/components/Header";
import Search from "./src/components/Search";

const App = () => {
  return (
    <View className="my-10">
      <Header />
      <Search />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
