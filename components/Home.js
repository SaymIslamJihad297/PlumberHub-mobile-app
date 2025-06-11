import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; // Add React import and use named import for useState
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PostCard from './PostCard';
import NavBar from './NavBar';
import SafeScreen from './SafeScreenProps';

const tabs = ['Active Post', 'Assign', 'Completed', 'Cancel'];

export default function Home() {
  const [activeTab, setActiveTab] = useState('Active Post'); // Fixed typo: steActiveTab -> setActiveTab

  return (
    <View>
      <View className='h-full flex bg-[#f9f9f9] pt-[5%] flex items-center'>

        {/* Navbar start */}
        <Text className='text-2xl font-bold text-black text-center'>My Jobs</Text>

        <View className='flex flex-row gap-7 justify-center mt-10'>
          {tabs.map(tab => (
            <TouchableOpacity 
              key={tab}
              className={`h-9 flex justify-center w-fit p-2 rounded-md ${activeTab === tab ? 'bg-[#FFD700]' : 'bg-transparent'}`}
              onPress={() => setActiveTab(tab)} // Fixed typo here too
            >
              <Text className='text-sm'>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className='h-[1] bg-gray-300 w-[87vw] View-center mt-2'></View>

        {/* NavBar end */}

        <ScrollView className='w-[100%] mb-20'>
          <View className='flex items-center'>
            <PostCard/>
        <PostCard/>
          </View>
        </ScrollView>

        
      </View>
      <StatusBar style="light" />
    </View>
  );
}