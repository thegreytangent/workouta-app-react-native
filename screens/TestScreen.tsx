import { useEffect } from 'react';
import {View, Text, Button} from 'react-native';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";


export default function TestScreen({navigation} : NativeStackHeaderProps ) {
    useEffect( () => {
        console.log("Initializing TestScreen ");
        return () => console.log("Unmounting TestScreen")
    },[])
    return (
        <View>
            <Text>I am TestScreen</Text>
          <Button title='Goto Root' onPress={() => navigation.push("Root")} />
        </View>
    );
}