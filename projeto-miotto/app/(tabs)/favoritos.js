import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const gatinhoLogo = require('../../assets/logo.png');

export default function App() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.hero}>
                    <Image source={gatinhoLogo} style={styles.logo} resizeMode="contain" />

                    <Text style={styles.title}>Coisas que eu amo ♡</Text>

                    <Text style={styles.heroText}>
                        Um pouquinho das coisas que fazem parte do meu mundo e deixam meus dias mais
                        felizes. 🎀
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>🐱 Meu gatinho Alok</Text>
                    <Text style={styles.cardText}>
                        O Alok é meu gatinho e uma das coisas que eu mais amo. Ele faz parte do meu
                        dia a dia e não poderia ficar de fora dessa lista. ♡
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>🎧 Ouvir música</Text>
                    <Text style={styles.cardText}>
                        Adoro ouvir música nos meus momentos livres. Música sempre deixa meus dias
                        mais divertidos e especiais.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>💅 Pintar as unhas</Text>
                    <Text style={styles.cardText}>
                        Gosto de pintar as unhas e testar cores e estilos diferentes. É uma forma de
                        me divertir e expressar meu estilo.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>✈️ Viajar</Text>
                    <Text style={styles.cardText}>
                        Amo viajar, conhecer lugares novos e viver experiências diferentes. Criar
                        novas memórias é uma das melhores partes.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>🍣 Sushi</Text>
                    <Text style={styles.cardText}>
                        Sushi é a minha comida favorita! Adoro comer e experimentar diferentes
                        tipos.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>🐾 Animais</Text>
                    <Text style={styles.cardText}>
                        Eu amo os animais em geral. Acho cada um especial e sempre fico feliz quando
                        estou perto deles.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff0f6',
    },

    container: {
        padding: 24,
        gap: 14,
    },

    hero: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 24,
        backgroundColor: '#ee5cac',
    },

    logo: {
        width: 90,
        height: 90,
        marginBottom: 4,
    },

    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#ffffff',
        textAlign: 'center',
    },

    heroText: {
        fontSize: 15,
        lineHeight: 22,
        color: '#fff5f9',
        textAlign: 'center',
        marginTop: 8,
    },

    card: {
        padding: 18,
        borderRadius: 20,
        backgroundColor: '#ffffff',
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#d94f82',
        marginBottom: 6,
    },

    cardText: {
        fontSize: 14,
        lineHeight: 21,
        color: '#54263a',
    },
});
