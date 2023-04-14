import { View, Text } from "react-native";

const Header = () => {
  return (
    <View
      className="container mx-auto flex justify-start items-start mt-16 
      shadow-4xl rounded-xl bg-gray-200 px-5 py-4 w-80"
    >
      <Text className="font-semibold text-[26px]">Grab your</Text>
      <Text className="text-[28px] font-extrabold">delicious meal</Text>
    </View>
  );
};

export default Header;
