import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, View, Text, Pressable } from 'react-native';
import WorkoutItem from '../components/WorkoutItem';
import { TacFont } from '../components/styled/tacFont';
import { useWorkOuts } from '../hooks/useWorkOut';


export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
    const workouts = useWorkOuts();
    return (
        <View style={styles.container}>
            <TacFont>
                <Text>New Workout</Text>
            </TacFont>
            <FlatList
                data={workouts}
                keyExtractor={item => item.slug} //for unique key
                renderItem={({ item }) => {
                    return (
                        <Pressable onPress={() =>
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