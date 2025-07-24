import { UserRepository } from "@/repositories/userRepository";
import { useAuthStore } from "@/stores/authStore";
import { LoginData } from "@/types/auth";
import { Link, router } from "expo-router";
import React, { Component } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

export class login extends Component {

  state:LoginData={
    username:'',
    password:''
  }

  handleLogin=async ()=>{
    const {username, password}=this.state;
    //use the zustand auth store
    const authStore=useAuthStore.getState();

    if(!username || !password){
      Alert.alert("please enter all the details")
    }

    try{
      const token=await UserRepository.login({username,password});

      if(!token){
        Alert.alert("Unable to login, please try again");
      }

      console.log("Login Successfull");
      Alert.alert("Login successfull, Welcome");

      //save the token and the username using the zustland
      await authStore.saveToken(token);
      router.push('/home');
    }
    catch(error:any){
      Alert.alert("Login failed", error.message || "Soemthing went wrong");
    };
  };
  
 
  render() {
    return (
      <View className="flex-1 gap-10 items-center px-6 bg-white">
        <Text className="text-3xl font-bold mb-14 py-5 text-blue-600">Login </Text>
        <View className=" w-full space-y-4 gap-6">
          <View>
            <Text className="text-gray-600 mb-1">Username</Text>
            <TextInput
              placeholder="Enter your username"
              autoCapitalize="none"
              value={this.state.username}
              onChangeText={(text=>this.setState({username:text}))}
              className="border border-gray-300 rounded-xl px-4 py-5 text-base bg-gray-50"
            />
          </View>

          <View>
            <Text className="text-gray-600 mb-1">Password</Text>
            <TextInput
              placeholder="Enter your password"
              secureTextEntry
              className="border border-gray-300 rounded-xl px-5 py-5 text-base bg-gray-50"
              value={this.state.password}
              onChangeText={(text)=>this.setState({password:text})}
            />
          </View>

          <Pressable className="bg-blue-600 rounded-xl py-3 mt-2" onPress={this.handleLogin}>
            <Text className="text-white text-center text-base font-semibold">
              Log In
            </Text>
          </Pressable>

          <Link href="/register" className="text-blue-600 items-center text-center"><Text>Not registered yet?, Signup here</Text></Link>
        </View>
      </View>
    );
  }
}

export default login;
