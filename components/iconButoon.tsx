import React from "react";
import { Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

interface IconButoonProps{
    Pul: () => void;
    icon: String;
    enlace?: String;
    color: String;
}

const IconButoon = ({icon, Pul, enlace, color}: IconButoonProps) => {
return (
    <Pressable onPress={Pul}>
        <Ionicons name={icon as any} size={24} colors={color} />
    </Pressable>
)
}

export default IconButoon