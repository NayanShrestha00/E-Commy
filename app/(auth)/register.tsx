import { UserRepository } from "@/repositories/userRepository";
import { useAuthStore } from "@/stores/authStore";
import { RegisterData } from "@/types/auth";
import { Link, router } from "expo-router";
import React, { Component } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

export class login extends Component {

  state:RegisterData={
    username:'',
    email:'',
    password:''
  }

  handleRegister=async ()=>{
    const {username,email, password}=this.state;
    const authStore=useAuthStore.getState();

    if(!username || !password){
      Alert.alert("Please enter all the details")
    }

    try{
      const data=await UserRepository.signup({username,email,password});
      const userId=data.id
      authStore.saveId(userId)
      //const userPayload = JSON.parse(data.config.data);
      console.log("Registration Successfull");
      Alert.alert("Registaration successfull, Welcome");
    
      //authStore.saveUser(userId,userPayload.email,userPayload.username);
      router.replace('/login');
    }
    catch(error:any){
      Alert.alert("Registaration  failed", error.message || "Something went wrong");
    };
  };
  
 
  render() {
    return (
      <View className="flex-1 gap-10 items-center px-6 bg-white">
        <Text className="text-3xl font-bold mb-14 py-5 text-blue-600 outline-2">Signup </Text>
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
            <Text className="text-gray-600 mb-1">Email</Text>
            <TextInput
              placeholder="Enter your email"
              autoCapitalize="none"
              value={this.state.email}
              onChangeText={(text=>this.setState({email:text}))}
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

          <Pressable className="bg-blue-600 rounded-xl py-3 mt-2" onPress={this.handleRegister}>
            <Text className="text-white text-center text-base font-semibold">
              Sign In
            </Text>
          </Pressable>

          <Link href="/login" className="text-blue-600 items-center text-center"><Text>Already registered?, Login here</Text></Link>
        </View>
      </View>
    );
  }
}

export default login;
