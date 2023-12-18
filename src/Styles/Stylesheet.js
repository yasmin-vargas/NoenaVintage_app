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
        heading: {
            color: colour.Black,
            fontSize: 22,
            fontWeight: "500",
            textAlign: "center",
            padding: 20,
        },
        text: {
            color: colour.Black,
            fontSize: 16,
            fontWeight: "500",
            textAlign: "center",
            padding: 20,
        },
    },
    imageStyle:{
        width: 200,
        height: 200,
        marginRight: 10,
    },
    searchStyles: {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
            paddingHorizontal: 16,
        },
        searchInput: {
            flex: 1,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 8,
            marginRight: 8,
        },
        searchButton: {
            padding: 8,
        },
    },
    productStyles: {
        container: {
            marginTop: 50,
            alignSelf: 'center',
            backgroundColor: colour.White,
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        productName: {
            color: colour.Black,
            fontSize: 18,
        },
        productBrand: {
            backgroundColor: colour.NoenaGreen,
            fontSize: 16,
        },
        productPrice: {
            color: colour.Black,
            fontSize: 14,
        },
        productDescription: {
            color: colour.Black,
            fontSize: 12,
        },
        productImage: {
            width: '100%',
            aspectRatio: 1,
            maxHeight: 100
        },
        productDetailsImage: {
            width: '100%',
            aspectRatio: 1,
            maxHeight: 300
        },
    },
    formStyles: {
        container: {
            width: '80%',
            marginTop: 50,
            alignSelf: 'center',
            backgroundColor: colour.White,
            padding: 10,
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
});
export {colour, Styles};