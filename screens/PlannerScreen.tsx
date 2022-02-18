import { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
export default function PlannerScreen({navigation}: any) {
    useEffect( () => {
        console.log("Initializing PlannerScreen ");
    })
    return (
        <View>
            <Text>I am panel screen</Text>
            <Button title='Goto Home' onPress={() => navigation.push("Home")} />
        </View>
    );
}