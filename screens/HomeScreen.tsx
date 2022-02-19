import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { FlatList, StyleSheet, View, Text} from 'react-native';

import WorkoutItem from '../components/WorkoutItem';
import data from '../data.json';
import { Workout } from '../types/data';

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

    return (
        <View style={styles.container}>
            <Text style={styles.header}>New Workout</Text>
             <FlatList 
              data={data as Array<Workout>} 
              keyExtractor={item => item.slug} //for unique key
              renderItem={WorkoutItem}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: "bold"
    }
});