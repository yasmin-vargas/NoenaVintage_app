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
        paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight || 20 : StatusBar.currentHeight + 10,
    },
    textStyles: {
        text: {
            color: colour.Black,
            fontSize: 20,
            fontWeight: "500",
            textAlign: "center",
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
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
        labelText: {
            color: colour.White,
            fontSize: 14,
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
            activeColor: colour.NoenaRose,
            inactiveColor: colour.NoenaGreen,
            size: 30,
        },
        tabLabel: {
            activeColor: colour.NoenaRose,
            inactiveColor: colour.NoenaGreen,
            fontSize: 5,
        },
    },
    imageStyle:{
        width: 100,
        height: 100,
        marginRight: 10,
    }
});
export {colour, Styles};