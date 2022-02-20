import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { TacFont } from '../components/styled/tacFont';
import { useWorkOutBySlug } from '../hooks/useWorkOutBySlug';
import { PressableText } from '../components/PressableText';

type DetailedParam = {
    route: {
        params: {
            slug: string
        }
    }
};

export default function WorkoutDetailScreen({ route }: NativeStackHeaderProps & DetailedParam) {

    const workout = useWorkOutBySlug(route.params.slug);

    if (!workout) {
        return null;
    }

    return (
        <View style={styles.container}>
            <TacFont>
                <Text>{workout.name}</Text>
            </TacFont>
            <PressableText onPress={()=>{alert("Text click")}} text="Testing"  />
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