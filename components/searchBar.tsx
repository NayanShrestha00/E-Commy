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
<<<<<<< HEAD
    <View className="flex-row items-center rounded-full px-5 py-4">
=======
    <View className="flex-row items-center px-5 py-4 bg-black ">
>>>>>>> de054ccf6ab0ff7ea96fd115364ce1cbdf87555f
        <Ionicons name="search" size={24} color="black" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
<<<<<<< HEAD
        className="flex-1 ml-2 text-[#4a739c]"
=======
        className="flex-1 ml-2 text-black"
>>>>>>> de054ccf6ab0ff7ea96fd115364ce1cbdf87555f
        placeholderTextColor="#A8B5DB"
      />
    </View>
  );
};

export default SearchBar;