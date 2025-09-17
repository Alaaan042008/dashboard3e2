import "../global.css";
import { View,Image,Text} from 'react-native'
import React from 'react'

const ProfileDetails = () => {
  return (
    <View className='flex justify-center items-center'>
      <Image 
        source={require('../assets/images/icon.png')} 
        className="max-w-36 max-h-36 rounded-full" 
      />
      <Text className="text-2xl font-bold">Alan Pulgarín</Text>
      <Text className="text-xl text-gray-400">Estudiante</Text>
    </View>
  )
}

export default ProfileDetails