import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";

const Stack = createNativeStackNavigator();

export default  function Navigation() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen component={HomeScreen} name="Home" />
            <Stack.Screen component={PlannerScreen} name="Planner" />
            </Stack.Navigator>
    </NavigationContainer>
    );

  
}
