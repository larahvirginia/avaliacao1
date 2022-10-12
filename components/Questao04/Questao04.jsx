import { View, Text, Button } from "react-native";
import { useState, useEffect } from "react";

export default function Questao04() {
    const [paises, setPaises] = useState([]);
    const [pais, setPais] = useState("africa");

    useEffect(() => {
        fetch(
            `https://restcountries.com/v2/region/${pais}?fields=name,population`
        ).then((response) => response.json().then((res) => setPaises(res)));
    }, [pais]);

    paises.sort((pais1, pais2) => {
        if (pais == "asia") {
            return pais1.population - pais2.population;
        } else {
            return pais2.population - pais1.population;
        }
    });

    const listaPaises = paises.map((pais, key) => {
        return (
            <Text style={{ fontSize: 24 }} key={key}>
                {pais.name} {pais.population}
            </Text>
        );
    });
    console.log(paises);

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
                Países da {pais}
            </Text>
            <View style={{ flexDirection: "row" }}>
                <View style={{ margin: 16 }}>
                    <Button
                        title="Países América"
                        onPress={() => {
                            setPais("americas");
                        }}
                    />
                </View>
                <View style={{ margin: 16 }}>
                    <Button
                        title="Países Ásia"
                        onPress={() => {
                            paises.sort((pais1, pais2) => {
                                return pais1.population - pais2.population;
                            });
                            setPais("asia");
                        }}
                    />
                </View>
                <View style={{ margin: 16 }}>
                    <Button
                        title="Países África"
                        onPress={() => {
                            setPais("africa");
                        }}
                    />
                </View>
            </View>
            <View>{listaPaises}</View>
        </View>
    );
}
