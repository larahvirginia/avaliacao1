import { Text, View } from "react-native";

export default function Disciplina() {
    let disciplinas = [
        "Concepção e Desenvolvimento de Produtos",
        "Design e Inovação",
        "Projetos Móveis",
        "Empreendedorismo",
    ];

    let disciplinasText = disciplinas.map((i) => {
        return (
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                }}
            >
                {i}
            </Text>
        );
    });

    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {disciplinasText}
        </View>
    );
}
