import { View, Text } from "react-native";
import Disciplina from "./Disciplina";

export default function Estudante({ nome, sobrenome, curso }) {
    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text
                style={{
                    fontSize: 24,
                }}
            >
                Nome: {nome}
            </Text>
            <Text
                style={{
                    fontSize: 24,
                }}
            >
                Sobrenome: {sobrenome}
            </Text>
            <Text
                style={{
                    fontSize: 24,
                }}
            >
                Curso: {curso}
            </Text>
        </View>
    );
}
