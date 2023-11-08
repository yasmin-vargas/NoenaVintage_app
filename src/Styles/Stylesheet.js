import { StyleSheet, Platform, StatusBar} from "react-native";
const colour = {
    NoenaGreen: "#61a492",
    NoenaPink: "#ea5b8c",
    NoenaRose: "#ffbcbc",
    White: "#ffffff",
    Trans: "transparent",
    Black: "#000",
};

const Styles = StyleSheet.create({
    padding: {
        padding: 35,
        paddingTop: Platform.OS === "iOS"? StatusBar.currentHeight : 0,
    },
    textStyles: {
        text: {
            color: colour.Black,
            fontSize: 20,
            fontWeight: "500",
            textAlign: "center",
        },
        heading: {
            color: colour.Black,
            fontSize: 25,
            fontWeight: "500",
            textAlign: "center",
        },
    },
    formStyles: {
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: colour.NoenaRose,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 10,
        },
        button: {
            backgroundColor: colour.NoenaGreen,
            padding: 10,
            borderRadius: 10,
            margin: 2,
            alignItems: 'center',
        },
        buttonText: {
            color: colour.White,
            fontSize: 18,
        },
    },
    tabStyles: {
        tabIcon: {
            color: colour.NoenaPink,
            size: 30,
        },
        tabLabel: {
            color: colour.NoenaPink,
            fontSize: 10,
        },
    },
});
export {colour, Styles};
