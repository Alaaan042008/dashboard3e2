import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Pressable } from 'react-native';

interface IconButtonProps2 {
    Pul: () => void;//Metodo
    icon: string; //Cadena
    enlace?:string;//Cadena opcional
    color:string;
  }


const IconButton2 = ({icon, Pul, enlace, color}: IconButtonProps2) => {
    return (
        <Pressable onPress={Pul} className='rounded-xl p-3 border-b-4 border-r-2 border-white-500 bg-white'>
        <Ionicons name={icon as any} size={40} color={color} />
        </Pressable>
    )
}

export default IconButton2