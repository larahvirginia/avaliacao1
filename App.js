import { StyleSheet, Text, View } from "react-native";
import Questao01 from "./components/Questao01/Questao01";
import Estudante from "./components/Questao01/Estudante";
import Disciplina from "./components/Questao01/Disciplina";
import Questao02 from "./components/Questao02/Questao02";
import Questao03 from "./components/Questao03/Questao03";
import Questao04 from "./components/Questao04/Questao04";

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <Questao01>
                <Estudante
                    nome="Larah"
                    sobrenome="Virgínia"
                    curso="Design Digital"
                ></Estudante>
                <Disciplina></Disciplina>
            </Questao01>
            <Questao02></Questao02>
            <Questao03></Questao03>
            <Questao04></Questao04>
        </View>
    );
}
