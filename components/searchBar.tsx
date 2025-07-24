import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, value, onChangeText, onPress }: Props) => {
  return (
    <View className="flex-row items-center px-5 py-4 bg-black ">
        <Ionicons name="search" size={24} color="black" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className="flex-1 ml-2 text-black"
        placeholderTextColor="#A8B5DB"
      />
    </View>
  );
};

export default SearchBar;