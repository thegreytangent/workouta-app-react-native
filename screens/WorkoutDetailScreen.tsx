import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TacFont } from '../components/styled/tacFont';

type DetailedParam = {
    route: {
        params: {
            slug: string
        }
    }
};



export default function WorkoutDetailScreen({route }: NativeStackHeaderProps & DetailedParam) {
    return (
        <View style={styles.container}>
            <TacFont>
                <Text>Slug - ${route.params.slug}</Text>
            </TacFont>
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