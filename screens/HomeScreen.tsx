import { useEffect } from 'react';
import {View, Text, Button} from 'react-native';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";


export default function HomeScreen({navigation} : NativeStackHeaderProps ) {
    useEffect( () => {
        console.log("Initializing HomeScreen ");
    })
    return (
        <View>
            <Text>I am home screen</Text>
          <Button title='Goto Planner' onPress={() => navigation.navigate("Planner")} />
        </View>
    );
}