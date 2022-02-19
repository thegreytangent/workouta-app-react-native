import { StyleSheet, Text } from "react-native";

export function TacFont({children} : {children: any}) {
    return (
        <Text  style={styles.font}>
            {children}
        </Text>
    )
}

const styles  = StyleSheet.create({
    font: {
        fontSize: 30,
        fontFamily: "tacFont"
    }
});