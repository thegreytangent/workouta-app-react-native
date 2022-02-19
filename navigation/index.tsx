import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TestScreen from '../screens/TestScreen';
import {Text} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator();
function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen component={BottomTabNavigator} 
            name="Root" 
            options={{headerShown: false}} />
            <Stack.Screen component={TestScreen} name="Test" />
        </Stack.Navigator>
    );

}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
                tabBarIcon: ({color, size}) => 
                <Entypo name="home" size={size} color={color} />
            }}
             />
            <BottomTab.Screen 
            name="Planner" component={PlannerScreen} 
            options={{
                unmountOnBlur: true, 
                tabBarIcon: ({color, size}) => 
                <Ionicons name="ios-newspaper-sharp" size={size} color={color} />
                }} /> 
        </BottomTab.Navigator>
    );
}



