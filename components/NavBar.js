import React from 'react'
import { Text, View } from 'react-native'
import { Home, BriefcaseBusiness, MessageCircleMore, UserRound } from 'lucide-react-native'

function NavBar() {
  return (
    <View className='w-screen bg-white flex items-center'>
        <View className='bg-[#ffffff] h-full sticky flex-row justify-between w-[90%]'>
          <View className='flex justify-evenly items-center'>
          <Home color={"black"} size={24}/>
          <Text>Home</Text>
        </View>
        <View className='flex justify-evenly items-center'>
          <BriefcaseBusiness />
          <Text>Jobs</Text>
        </View>
        <View className='flex justify-evenly items-center'>
          <MessageCircleMore />
          <Text>Chat</Text>
        </View>
        <View className='flex justify-evenly items-center'>
          <UserRound />
          <Text>Profile</Text>
        </View>
        </View>
    </View>
  )
}

export default NavBar