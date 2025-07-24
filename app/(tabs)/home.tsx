import SearchBar from '@/components/searchBar';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { Component } from 'react';
import { ScrollView, Text, View, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '@/stores/authStore';
import { router } from 'expo-router';



export class home extends Component {

  authStore = useAuthStore.getState();
  state = {
    username: this.authStore.username,
    email: this.authStore.email,
    token: this.authStore.token,
    isAuthenticated: this.authStore.isAuthenticated,
    showDropdown: false
  }


  render() {
    return (
      <SafeAreaView className='flex-1'>
        <View className='flex-row mx-auto items-center justify-center'>
          <Text className='w-[80%] text-center text-2xl'>Welcome, {this.state.username}</Text>
          <Ionicons
            name="person-outline"
            size={30}
            color="black"
            className='m-5'
            onPress={() => this.setState({ showDropdown: !this.state.showDropdown })}
          />
        </View>
        {this.state.showDropdown && (
          <View className="absolute top-16 right-5 bg-white shadow-md rounded-lg p-2 z-10">
            <Pressable onPress={() => {
              this.setState({ showDropdown: false });
              Alert.alert("Logged out");

              //use the authStore to logout the user
              this.authStore.logout;
              router.replace('/login');
            }}>
              <Text className="py-2 px-4">Logout</Text>
            </Pressable>

            <Pressable onPress={() => {
              this.setState({ showDropdown: false });
              Alert.alert("Toggle Dark/Light Mode");
            }}>
              <Text className="py-2 px-4">Dark Mode / Light Mode</Text>
            </Pressable>

            <Pressable onPress={() => {
              this.setState({ showDropdown: false });
              Alert.alert("Go to Settings");
            }}>
              <Text className="py-2 px-4">Settings</Text>
            </Pressable>
          </View>
        )}
        <ScrollView className="flex-1 px-5">
          <View className='flex-'>
            <SearchBar
              placeholder='Search here'
              value=''
              onChangeText={() => "hello"}
              onPress={() => "hii"}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default home  