import { useEffect } from 'react';
import {View, Text, Button} from 'react-native';
export default function HomeScreen({navigation} : any ) {
    useEffect( () => {
        console.log("Initializing HomeScreen ");
    })
    return (
        <View>
            <Text>I am home screen</Text>
          <Button title='Goto Planner' onPress={() => navigation.push("Planner")} />
        </View>
    );
}