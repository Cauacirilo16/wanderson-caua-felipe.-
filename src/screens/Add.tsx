import { Text, TextInput } from "react-native";
import SwitchButton from "../SwitchButton";
import { useState } from "react"
export default function Add() {

  const [btnState, setBtnState] = useState<"in"|"out">("out")
    return (
      <>
      
        <Text>Adicionar Transação</Text>
        <TextInput 
          placeholder="texto"
          placeholderTextColor={'#fff'}
          keyboardType="numeric"
        />
        <SwitchButton state={btnState} onChange={setBtnState}/>
      </>
    )
}


  