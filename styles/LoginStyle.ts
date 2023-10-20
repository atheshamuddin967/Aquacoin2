import { StyleSheet } from "react-native";
export const LoginStyle = StyleSheet.create({
    LoginContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
        width: "100%"
    },
    loginImage: {
        height: 204,
        width: 204,
        marginTop: 70,
        marginBottom: 30
    },
    LoginHeading: {
        fontFamily: "UrbanistBold",
        fontSize: 24,
        marginBottom: 30,
        color: "#212121"
    },
    forget: {
        fontSize: 16,
        fontWeight: "600",
        fontFamily: "UrbanistSemiBold",
        color: "#6EDFE7",
        marginVertical: 20
    },
    newaccount: {
        flexDirection: "row",
        marginVertical: 30,

    },
    newAccText: {
        fontSize: 14,
        fontFamily: "UrbanistRegular",
        color: "#9E9E9E",
        marginRight: 5
    },
    swithAcc: {
        color: "#6EDFE7",
        fontSize: 14,
        fontWeight: "600",
        fontFamily: "UrbanistSemiBold",
    },
    secondcontainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    thirdcontainer: {
        flex: 1
    }
})