import { useEffect } from 'react';
import {View, Text, Button} from 'react-native';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";


export default function HomeScreen({navigation} : NativeStackHeaderProps ) {
    useEffect( () => {
        console.log("Initializing HomeScreen ");
        return () => console.log("Unmounting Home Screen")
    },[])
    return (
        <View>
            <Text>I am home screen</Text>
          <Button title='Goto Test' onPress={() => navigation.navigate("Test")} />
        </View>
    );
}