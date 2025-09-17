import { Text, View } from "react-native";
import "../global.css";
import ProfileDetails from "@/components/profile-details";

export default function Index() {
  return (
    <View className="flex justify-center items-center bg white-stone-800 w-screen h-screen">
      <ProfileDetails></ProfileDetails>
    </View>
  );
}
