import "../global.css";
import { View,Image,Text, Linking} from 'react-native'
import React from 'react'
import IconButoon from "./iconButoon";
import IconButoon2 from "./iconButoon2";

const ProfileDetails = () => {
  return (
    <View className="flex flex-col w-screen h-screen">
    <>
    <View className="flex flex-col items-center bg-white h-1/2 pt-20">
      <Image 
      source={require('../assets/images/icon.png')} 
      className="w-36 h-36 rounded-full mb-4" 
      />
      <Text className="text-2xl font-bold">Alan Pulgarín</Text>
      <Text className="text-xl text-gray-400 mb-6">Estudiante</Text>
      <View className="flex-row justify-around items-center space-x-4 w-full px-8 mt-4">
        <IconButoon icon="logo-instagram" Pul={() =>  Linking.openURL("https://www.instagram.com/its.alaan.04/?utm_source=ig_web_button_share_sheet")} color="red"></IconButoon>
        <IconButoon icon="logo-whatsapp" Pul={() =>  Linking.openURL("https://wa.me/+593969388342")} color="green"></IconButoon>
        <IconButoon icon="logo-x" Pul={() =>  Linking.openURL("https://x.com/Alan1175829")} color="black"></IconButoon>
        <IconButoon icon="logo-facebook" Pul={() =>  Linking.openURL("https://www.facebook.com/alaan")} color="blue"></IconButoon>
      </View>
      </View>
      </>
      <>
      <View className="flex justify-down items-down bg-slate-900 h-1/2">
      
      <View className="flex-row justify-around items-center space-x-4 w-full px-8 mt-4">
        <IconButoon2 icon="logo-instagram" Pul={() =>  Linking.openURL("https://www.instagram.com/its.alaan.04/?utm_source=ig_web_button_share_sheet")} color="red"></IconButoon2>
        <IconButoon2 icon="logo-whatsapp" Pul={() =>  Linking.openURL("https://wa.me/+593969388342")} color="green"></IconButoon2>
        <IconButoon2 icon="logo-x" Pul={() =>  Linking.openURL("https://x.com/Alan1175829")} color="black"></IconButoon2>
        <IconButoon2 icon="logo-facebook" Pul={() =>  Linking.openURL("https://www.facebook.com/alaan")} color="blue"></IconButoon2>
      </View>
      </View>
      </>
    </View>

 
  )
}

export default ProfileDetails