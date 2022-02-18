import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
            <Stack.Screen component={BottomTabNavigator} name="Root" />
        </Stack.Navigator>
    );

}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen name="Home" component={HomeScreen} />
            <BottomTab.Screen name="Planner" component={PlannerScreen} />
        </BottomTab.Navigator>
    );
}



