import { useEffect } from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json";

export default function HomeScreen({navigation} : NativeStackHeaderProps ) {
    useEffect( () => {
        console.log("Initializing HomeScreen ");
        return () => console.log("Unmounting Home Screen")
    },[])
    const renderItem = ({item}: any) => {
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
              data={data} 
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