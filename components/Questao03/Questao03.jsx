import { View, Text, FlatList, Button } from "react-native";
import { useState, useEffect } from "react";

export default function Questao03() {
    const [nomes, setNomes] = useState("");
    const [offset, setOffset] = useState("");

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                setNomes(responseJson.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [offset]);
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                padding: 64,
                justifyContent: "space-between",
            }}
        >
            <Text style={{ fontSize: 36, fontWeight: "bold" }}>
                Meus Pokemons
            </Text>
            <View>
                <FlatList
                    style={{ padding: 16 }}
                    data={nomes}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Text style={{ fontSize: 24, margin: 16 }}>
                                    {" "}
                                    {item.name}
                                </Text>
                            </View>
                        );
                    }}
                />
            </View>
            <View style={{ backgroundColor: "red", width: "100%" }}>
                <Button
                    title="Próximos Pokemons"
                    onPress={() => {
                        setOffset(offset + 10);
                    }}
                />
            </View>
        </View>
    );
}
