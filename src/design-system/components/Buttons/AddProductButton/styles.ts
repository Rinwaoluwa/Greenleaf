import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        zIndex: 99,
        bottom: 100,
        right: 0,
        backgroundColor: "#087319",
        width: 60,
        height: 60,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
});
