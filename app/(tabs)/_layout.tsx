import { ImageBackground, Text, View } from 'react-native'
import React, { Component } from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';


function TabIcon({ focused, icon, title }: any) {
  if (focused) {
    return (
      <ImageBackground
        className='flex flex-col w-full flex-1 min-w-[90px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden  bg-[#4a739c]'
      >
          <Ionicons name={icon} size={24} color="white" />
        <Text className="text-sm font-semibold color-white">
          {title}
        </Text>
      </ImageBackground>
    )
  }
  return (
    <View className="size-full justify-center items-center flex-1 min-w-[90px] min-h-14  mt-4 rounded-full">
          <Ionicons name={icon} size={24} color="black" />
      <Text className="text-sm font-semibold color-black">
        {title}
      </Text>
    </View>
  );
}

export class _layout extends Component {
  render() {
    return (
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarItemStyle: {
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarStyle: {
          backgroundColor: "#f7fafc",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          // overflow: "hidden",
          borderWidth: 1,
        },
        }}
      >
        <Tabs.Screen name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={"home-outline"} title="Home" />
            )
          }}
        />
        <Tabs.Screen name="category"
          options={{
            title: 'Category',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={"grid-outline"} title="Category" />

            )
          }}
        />
        <Tabs.Screen name="cart"
          options={{
            title: 'Cart',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={"cart-outline"} title="Cart" />

            )
          }}
        />
        <Tabs.Screen name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={"person-outline"} title="Profile" />

            )
          }}
        />

      </Tabs>
    )
  }
}

export default _layout