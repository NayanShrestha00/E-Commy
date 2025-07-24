import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'

export class ProductCart extends Component {
  render() {
    return (
      <View className='bg-red-500 w-[50%]'>
        <Image source={{ uri: 'https://d3lmh6vx91lrw8.cloudfront.net/catalog/product/i/m/img_2303.jpg' }} 
          className="w-52 h-52 rounded-lg" 
        />
        <Text className="text-lg font-semibold mt-2">
          Product Name
        </Text>
        <Text className=' '>
          $99.99
        </Text>
      </View>
    )
  }
}

export default ProductCart