import { useEffect } from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json";
import { Workout, Difficulty } from '../types/data';

export default function HomeScreen({navigation} : NativeStackHeaderProps ) {
    useEffect( () => {
        console.log("Initializing HomeScreen ");
        return () => console.log("Unmounting Home Screen")
    },[])
    
    const workout: Workout = {
        slug: "test",
        name: "test",
        duration: 123,
        difficulty: "easy",
        sequence: []
    }
    const renderItem = ({item}: {item: Workout}) => {
        return (
            <View>
             
            <Text>{item.name}</Text>
            <Text>{item.difficulty}</Text>
        </View>
        );
    }
    return (
        <View style={styles.container}>
             <FlatList 
              data={data as Array<Workout>} 
              keyExtractor={item => item.slug} //for unique key
              renderItem={renderItem}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
});