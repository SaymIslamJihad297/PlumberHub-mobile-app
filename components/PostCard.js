import React from 'react'; // Make sure React is imported
import { Image, View, Text, ScrollView } from 'react-native';

export default function PostCard() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <View>
        <Image
          className='h-[20vh] w-[90vw]'
          source={{
            uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0'
          }}
          resizeMode="cover"
          onLoad={() => console.log('Image loaded successfully')}
          onError={(error) => console.log('Image failed to load:', error)}
        />
        <Text style={{ marginTop: 10 }}>Post Card Content</Text>
      </View>
    </ScrollView>
  );
}