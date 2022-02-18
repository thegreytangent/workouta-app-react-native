import { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function PlannerScreen({navigation}: NativeStackHeaderProps) {
    
    useEffect( () => {
        console.log("Initializing PlannerScreen ");
    },[])
    return (
        <View>
            <Text>I am panel screen</Text>
            <Button title='Goto Home' onPress={() => navigation.navigate("Home")} />
        </View>
    );
}