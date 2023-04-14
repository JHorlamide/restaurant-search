import { useState } from "react";
import {
  View,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from "react-native";
import CustomInput from "./Widgets/CustomInputs/CustomInput";

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleInputChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setSearchValue(e.nativeEvent.text);
  };

  return (
    <View className="container mx-auto mt-8 flex justify-center items-center">
      <CustomInput
        inputStyle="rounded-full py-4 px-5 border-2 border-gray-700 w-80 text-black italic"
        inputProps={{
          placeholder: "Search",
          name: "searchValue",
          value: searchValue,
          onchange: handleInputChange,
        }}
      />
    </View>
  );
};

export default Search;
