import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

const PostCard = () => {
  return (
    <View className="w-[85%] bg-white rounded-2xl overflow-hidden shadow-lg mt-5">
      {/* Header Image */}
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1749487699158-8a5332fc09a2?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
        className="w-full h-44"
        resizeMode="cover"
      />
      
      {/* Issue ID */}
      <View className="absolute right-2 top-36 bg-white/80 px-2 py-1 rounded">
        <Text className="text-sm font-bold">#A102</Text>
      </View>
      
      {/* Details Section */}
      <View className="p-3">
        {/* Issue */}
        <View className="flex-row items-center mb-3">
          <Feather name="alert-triangle" size={20} color="#000" />
          <Text className="w-20 ml-2 text-sm font-semibold text-gray-800">Issue</Text>
          <Text className="mr-2 text-sm text-gray-800">:</Text>
          <Text className="flex-1 text-sm text-gray-800">Leaking faucet in kitchen sink causing water wastage.</Text>
        </View>
        
        {/* Category */}
        <View className="flex-row items-center mb-3">
          <Feather name="tool" size={20} color="#000" />
          <Text className="w-20 ml-2 text-sm font-semibold text-gray-800">Category</Text>
          <Text className="mr-2 text-sm text-gray-800">:</Text>
          <Text className="flex-1 text-sm text-gray-800">Plumbing</Text>
        </View>
        
        {/* Deadline */}
        <View className="flex-row items-center mb-3">
          <Feather name="calendar" size={20} color="#000" />
          <Text className="w-20 ml-2 text-sm font-semibold text-gray-800">Deadline</Text>
          <Text className="mr-2 text-sm text-gray-800">:</Text>
          <Text className="flex-1 text-sm text-gray-800">May 31, 2025</Text>
        </View>
        
        {/* Urgency */}
        <View className="flex-row items-center mb-3">
          <Feather name="alert-circle" size={20} color="#000" />
          <Text className="w-20 ml-2 text-sm font-semibold text-gray-800">Urgency</Text>
          <Text className="mr-2 text-sm text-gray-800">:</Text>
          <Text className="flex-1 text-sm text-gray-800">High (Urgent)</Text>
        </View>
        
        {/* Price */}
        <View className="flex-row items-center mb-3">
          <Feather name="dollar-sign" size={20} color="#000" />
          <Text className="w-20 ml-2 text-sm font-semibold text-gray-800">Price</Text>
          <Text className="mr-2 text-sm text-gray-800">:</Text>
          <Text className="flex-1 text-sm text-gray-800">$ 225 (Fixed)</Text>
        </View>
      </View>
      
      {/* Buttons */}
      <View className="flex-row justify-between p-4">
        <TouchableOpacity className="flex-1 bg-red-500 py-3 rounded-lg mr-2 items-center">
          <Text className="text-white font-semibold text-base">Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-yellow-400 py-3 rounded-lg ml-2 items-center">
          <Text className="text-black font-semibold text-base">Bids list</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostCard;