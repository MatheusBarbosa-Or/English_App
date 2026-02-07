import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {router} from "expo-router";

export default function MainPage() {

    const handleRouter = () =>{
        router.push({pathname: "/loginPage"})
    }
    return (
        <View style= {styles.container}>
            <Text style={styles.title}>Tela de Teste Inicial</Text>
            <TouchableOpacity style={styles.button} onPress={handleRouter}>
                <Text style={styles.buttonText}>Botão para tela de login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#cfcfcf"},
    title: {flexDirection: "row", justifyContent: "center", alignItems: "center", fontSize: 20, color: "#090909"},
    button: {flexDirection: "row", justifyContent: "center", alignItems: "center", borderStyle: "solid",borderWidth: 2, borderColor: "#ffffff", borderRadius: 20, padding: 5, marginVertical: 5},
    buttonText: {color: "#090909", fontSize: 12},
})