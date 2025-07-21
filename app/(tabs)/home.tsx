import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import SearchBar from '@/components/searchBar';

export class home extends Component {
  render() {
    return (
      <SafeAreaView className='flex-1'>
        <View className='flex-row mx-auto items-center justify-center'>
          <Text className='w-[80%] text-center text-2xl'>E-Commy</Text>
          <Ionicons name="cart-outline" size={30} color="black" />
        </View>
        <ScrollView className="flex-1 px-5">
          <View className='flex-1 bg-red-300'>
           <SearchBar  
              placeholder='Search here' 
              value='value'
              onChangeText={()=>"hello"}
              onPress={()=>"hii"}
           /> 
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default home  