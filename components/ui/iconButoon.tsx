import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Pressable } from 'react-native';

interface IconButtonProps {
  Pul: () => void;//Metodo
  icon: string; //Cadena
  enlace?:string;//Cadena opcional
  color:string;
}

const IconButton = ({icon, Pul, enlace, color}: IconButtonProps) => {
  return (
    <Pressable onPress={Pul} className='rounded-xl p-3 border-b-4 border-r-2 border-gray-500'>
        <Ionicons name={icon as any} size={24} color={color} />
    </Pressable>
  )
}

export default IconButton