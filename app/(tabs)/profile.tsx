import { useAuthStore } from '@/stores/authStore'
import React, { Component } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


export class profile extends Component {

  authStore=useAuthStore.getState();

  state={
    profileImage:"https://images.unsplash.com/photo-1585197508786-35c0ae51eb18?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username:this.authStore?.username ??'JohnDoe',
    email:this.authStore?.email ?? 'johndoe@gmail.com',
    gender:'Male',
    address:'Kathmandu , Nepal',
    phone:"9825959108",
  }

  handleInputChange=(field:string,value:string)=>{
    this.setState({[field]:value});
  }

  render() {
    return (
    <SafeAreaView className='flex-1 bg-gray-50'>
      <ScrollView className='flex-1 px-6 py-8'>
        {/* Profile Image Section */}
        <View className='items-center mb-8'>
          <TouchableOpacity className='items-center'>
            <View className='relative'>
              <Image 
                source={{uri: this.state.profileImage}} 
                className='w-32 h-32 rounded-full border-5 border-blue shadow-lg bg-gray-200' 
              />
              <View className='absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 shadow-md'>
                <Text className='text-white text-xs font-semibold'>📷</Text>
              </View>
            </View>
            <Text className='text-blue-500 font-medium mt-3 text-base'>Tap to change photo</Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View className='space-y-6'>
          {/* Username Field */}
          <View className='bg-white rounded-xl p-4 shadow-sm border border-gray-100'>
            <Text className='text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide'>
              Username
            </Text>
            <TextInput
              value={this.state.username}
              onChangeText={(text) => this.handleInputChange('username', text)}
              className='text-gray-900 text-lg font-medium py-2 border-b border-gray-200 focus:border-blue-500'
              placeholder='Enter your username'
              placeholderTextColor='#9CA3AF'
            />
          </View>

          {/* Email Field */}
          <View className='bg-white rounded-xl p-4 shadow-sm border border-gray-100'>
            <Text className='text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide'>
              Email Address
            </Text>
            <TextInput
              keyboardType="email-address"
              value={this.state.email}
              onChangeText={(text) => this.handleInputChange('email', text)}
              className='text-gray-900 text-lg font-medium py-2 border-b border-gray-200 focus:border-blue-500'
              placeholder='Enter your email'
              placeholderTextColor='#9CA3AF'
              autoCapitalize='none'
            />
          </View>

          {/* Gender Field */}
          <View className='bg-white rounded-xl p-4 shadow-sm border border-gray-100'>
            <Text className='text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide'>
              Gender
            </Text>
            <TextInput
              value={this.state.gender}
              onChangeText={(text) => this.handleInputChange('gender', text)}
              className='text-gray-900 text-lg font-medium py-2 border-b border-gray-200 focus:border-blue-500'
              placeholder='Select gender'
              placeholderTextColor='#9CA3AF'
            />
          </View>

          {/* Address Field */}
          <View className='bg-white rounded-xl p-4 shadow-sm border border-gray-100'>
            <Text className='text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide'>
              Address
            </Text>
            <TextInput
              value={this.state.address}
              onChangeText={(text) => this.handleInputChange('address', text)}
              className='text-gray-900 text-lg font-medium py-2 border-b border-gray-200 focus:border-blue-500'
              placeholder='Enter your address'
              placeholderTextColor='#9CA3AF'
              multiline={true}
              numberOfLines={2}
            />
          </View>

          {/*Phone number field */}
          <View className='bg-white rounded-xl p-4 shadow-sm border border-gray-100'>
            <Text className='text-gray-700 font-semibold mb-2 text-sm'>
              Phone
            </Text>
            <TextInput
              value={this.state.phone}
              onChangeText={(text) => this.handleInputChange('phone', text)}
              className='text-gray-900 text-lg font-medium py-2 border-b border-gray-200 focus:border-blue-500'
              placeholder='Enter your phone'
              placeholderTextColor='#9CA3AF'
              multiline={true}
              numberOfLines={2}
            />
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity className='bg-blue-500 rounded-xl py-4 mt-5 shadow-lg active:bg-blue-600' >
          <Text className='text-white text-center font-bold text-lg'>
            Save Changes
          </Text>
        </TouchableOpacity>

        {/* Bottom Spacing */}
        <View className='h-8' />
      </ScrollView>
    </SafeAreaView>
  );
}};

export default profile;



