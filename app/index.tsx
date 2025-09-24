import { Stack } from "expo-router"; 
import { Text, View } from "react-native";
import "../global.css";
import ProfileDetails from "@/components/profile-details";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View>
        <ProfileDetails />
      </View>
    </>
  );
}
