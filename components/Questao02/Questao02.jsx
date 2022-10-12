import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react";

export default function Questao02() {
    const [numeroUm, setNumeroUm] = useState(0);
    const [numeroDois, setNumeroDois] = useState(0);
    const [resultado, setResultado] = useState(0);

    return (
        <View style={estilos.container}>
            <View style={estilos.inputContainer}>
                <TextInput
                    style={estilos.input}
                    onChangeText={(e) => {
                        setNumeroUm(e);
                    }}
                ></TextInput>
                <TextInput
                    style={estilos.input}
                    onChangeText={(e) => {
                        setNumeroDois(e);
                    }}
                ></TextInput>
            </View>
            <View style={estilos.botoes}>
                <View style={estilos.botao}>
                    <Button
                        onPress={() => {
                            setResultado(
                                parseInt(numeroUm) + parseInt(numeroDois)
                            );
                        }}
                        title="+"
                    ></Button>
                </View>
                <View style={estilos.botao}>
                    <Button
                        onPress={() => {
                            setResultado(
                                parseInt(numeroUm) - parseInt(numeroDois)
                            );
                        }}
                        title="-"
                    ></Button>
                </View>
                <View style={estilos.botao}>
                    <Button
                        onPress={() => {
                            setResultado(
                                parseInt(numeroUm) * parseInt(numeroDois)
                            );
                        }}
                        title="*"
                    ></Button>
                </View>
                <View style={estilos.botao}>
                    <Button
                        onPress={() => {
                            setResultado(
                                parseInt(numeroUm) / parseInt(numeroDois)
                            );
                        }}
                        title="/"
                    ></Button>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 24 }}>Resultado: {resultado} </Text>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        height: "100%",
        flex: 1,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    input: {
        height: 48,
        borderColor: "gray",
        borderWidth: 1,
        backgroundColor: "white",
        color: "gray",
        margin: 16,
    },
    botoes: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    botao: {
        width: 48,
        height: 48,
        margin: 16,
    },
});
