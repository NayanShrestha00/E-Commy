import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class cart extends Component {
  render() {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text className='color-red-500 text-5xl'>cart</Text>
      </View>
    )
  }
}

export default cart