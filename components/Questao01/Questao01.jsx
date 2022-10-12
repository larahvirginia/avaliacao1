import { View } from "react-native";

export default function Questao01(props) {
    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 32,
            }}
        >
            {props.children}
        </View>
    );
}
