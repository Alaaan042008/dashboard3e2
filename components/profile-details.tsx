import "../global.css";
import { View, Image, Text, Linking, TextInput } from "react-native";
import React, { useState } from "react";
import CustomText from "./ui/CustomText";
import IconButoon from "./ui/iconButoon";
import IconButoon2 from "./ui/iconButoon2";

const ProfileDetails = () => {
  const [Ingreso, Texto] = useState("");

  return (
    <View className="flex flex-col w-screen h-screen">
      <View className="flex justify-center items-center h-1/2 w-screen">
        <Image
          source={require("../assets/images/icon.png")}
          className="max-h-36 max-w-36 rounded-full"
        />
        <CustomText variant="title" value="Alan Pulgarín" />
        <CustomText variant="subtitle" value="Estudiante" />

        <View className="flex-row justify-around items-center space-x-4 w-full px-8 mt-4">
          <IconButoon
            icon="logo-instagram"
            Pul={() =>
              Linking.openURL(
                "https://www.instagram.com/its.alaan.04/?utm_source=ig_web_button_share_sheet"
              )
            }
            color="red"
          />
          <IconButoon
            icon="logo-whatsapp"
            Pul={() => Linking.openURL("https://wa.me/+593969388342")}
            color="green"
          />
          <IconButoon
            icon="logo-x"
            Pul={() => Linking.openURL("https://x.com/Alan1175829")}
            color="black"
          />
          <IconButoon
            icon="logo-facebook"
            Pul={() => Linking.openURL("https://www.facebook.com/alaan")}
            color="blue"
          />
        </View>
      </View>
      <View className="flex justify-start items-center bg-slate-900 h-1/2">
        <View className="flex-row justify-around items-center space-x-4 w-full px-8 mt-4">
          <IconButoon2
            icon="logo-instagram"
            Pul={() =>
              Linking.openURL(
                "https://www.instagram.com/its.alaan.04/?utm_source=ig_web_button_share_sheet"
              )
            }
            color="red"
          />
          <IconButoon2
            icon="logo-whatsapp"
            Pul={() => Linking.openURL("https://wa.me/+593969388342")}
            color="green"
          />
          <IconButoon2
            icon="logo-x"
            Pul={() => Linking.openURL("https://x.com/Alan1175829")}
            color="black"
          />
          <IconButoon2
            icon="logo-facebook"
            Pul={() => Linking.openURL("https://www.facebook.com/alaan")}
            color="blue"
          />
        </View>
        <TextInput
          value={Ingreso}
          onChangeText={Texto}
          placeholder="Escribe aquí..."
          placeholderTextColor="#aaa"
          className="bg-white text-black rounded-lg p-3 m-4 w-11/12"
        />
      </View>
    </View>
  );
};

export default ProfileDetails;
