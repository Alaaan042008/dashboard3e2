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
      <IconButoon icon="logo-instagram" Pul={() => window.open("https://www.instagram.com/its.alaan.04/?utm_source=ig_web_button_share_sheet", "_blank")} color="red"></IconButoon>
      <IconButoon icon="logo-whatsapp" Pul={() => window.open("https://wa.me/+593969388342", "_blank")} color="green"></IconButoon>
      <IconButoon icon="logo-x" Pul={() => window.open("https://x.com/Alan1175829", "_blank")} color="black"></IconButoon>
      <IconButoon icon="logo-facebook" Pul={() => window.open("https://www.facebook.com/alaan", "_blank")} color="blue"></IconButoon>
      </View>
      <Text>   </Text>
      <View className="flex justify-center items-center w-screen h-screen bg-slate-900">
      
      </View>
      </View>
    
 
  )
}

export default ProfileDetails