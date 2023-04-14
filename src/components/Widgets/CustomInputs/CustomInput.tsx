import { View, TextInput } from "react-native";

interface CustomInputProps {
  inputStyle: string;
  inputProps: any;
}

const CustomInput = ({ inputStyle, inputProps }: CustomInputProps) => {
  return (
    <View>
      <TextInput className={inputStyle} {...inputProps} />
    </View>
  );
};

export default CustomInput;
