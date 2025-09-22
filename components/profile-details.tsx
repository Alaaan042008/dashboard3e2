import "../global.css";
import { View,Image,Text} from 'react-native'
import React from 'react'
import IconButoon from "./iconButoon";

const ProfileDetails = () => {
  return (
    <View className="flex justify-center items-center bg white-stone-800 w-screen h-2000">
      <Image 
        source={require('../assets/images/icon.png')} 
        className="max-w-36 max-h-36 rounded-full" 
      />
      <Text className="text-2xl font-bold">Alan Pulgarín</Text>
      <Text className="text-xl text-gray-400">Estudiante</Text>
      <View className="flex-row justify-around items-center space-x-4 mt-1000000000">
      <IconButoon icon="logo-instagram" Pul={() => console.log('instagram')} clor></IconButoon>
      <IconButoon icon="logo-whatsapp" Pul={() => console.log('whatsapp')}></IconButoon>
      <IconButoon icon="logo-x" Pul={() => console.log('x')}></IconButoon>
      <IconButoon icon="logo-facebook" Pul={() => console.log('facebook')}></IconButoon>
      </View>
      </View>
    
 
  )
}

export default ProfileDetails