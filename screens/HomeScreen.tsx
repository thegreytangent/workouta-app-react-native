import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { FlatList, StyleSheet, View, Text, Pressable } from 'react-native';

import WorkoutItem from '../components/WorkoutItem';
import data from '../data.json';
import { Workout } from '../types/data';
import { TacFont } from '../components/styled/tacFont';

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
    useEffect(() => {
        console.log("Initializing HomeScreen ");
        return () => console.log("Unmounting Home Screen")
    }, [])

    const workout: Workout = {
        slug: "test",
        name: "test",
        duration: 123, 
        difficulty: "easy",
        sequence: []
    }

    return (
        <View style={styles.container}>
            <TacFont>
                <Text>New Workout</Text>
            </TacFont>
             <FlatList
                data={data as Array<Workout>}
                keyExtractor={item => item.slug} //for unique key
                renderItem={({ item }) => {
                    return (
                        <Pressable onPress={ () => 
                         navigation.navigate("WorkoutDetail", {
                             slug: item.slug
                         })
                        }>
                            <WorkoutItem item={item} />
                        </Pressable>
                    )
                }}
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
        fontWeight: "bold",

    }
});