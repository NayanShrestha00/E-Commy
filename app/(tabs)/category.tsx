import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class categories extends Component {
  render() {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text className='color-red-500 text-5xl'>Categories</Text>
      </View>
    )
  }
}

export default categories