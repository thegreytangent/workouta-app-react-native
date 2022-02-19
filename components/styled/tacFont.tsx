import { StyleSheet, Text } from "react-native";

export function TacFont(props: Text['props']) {
    return (
        <Text {...props} style={[props.style,styles.font]} />
    )
}

const styles  = StyleSheet.create({
    font: {
        fontSize: 30,
        fontFamily: "tacFont"
    }
});