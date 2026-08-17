import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const gatinhoLogo = require('../../assets/logo.png');

export default function AulasScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.hero}>
                    <Image source={gatinhoLogo} style={styles.logo} resizeMode="contain" />

                    <Text style={styles.eyebrow}>♡ meus estudos ♡</Text>

                    <Text style={styles.title}>O que estou aprendendo? 🎀</Text>

                    <Text style={styles.description}>
                        Algumas das matérias e assuntos que fazem parte da minha jornada de
                        aprendizado.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>🧪 Testes de Software</Text>

                    <Text style={styles.cardItem}>
                        Aprendendo sobre testes, qualidade de software e formas de verificar se uma
                        aplicação está funcionando corretamente.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>🌐 IoT</Text>

                    <Text style={styles.cardItem}>
                        Estudando Internet das Coisas e a comunicação entre dispositivos conectados.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>📱 Dispositivos Móveis III</Text>

                    <Text style={styles.cardItem}>
                        Desenvolvendo aplicativos mobile e aprendendo a criar interfaces e
                        funcionalidades usando React Native e Expo.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>🎨 Front-end II</Text>

                    <Text style={styles.cardItem}>
                        Aprendendo CSS, novas formas de estilização e bibliotecas visuais para criar
                        interfaces mais bonitas e interativas.
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
        gap: 8,
        padding: 20,
        borderRadius: 24,
        backgroundColor: '#ee5cac',
    },

    logo: {
        width: 80,
        height: 80,
        marginBottom: 2,
    },

    eyebrow: {
        fontSize: 13,
        fontWeight: '700',
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: '#ffe1ed',
        textAlign: 'center',
    },

    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#ffffff',
        textAlign: 'center',
    },

    description: {
        fontSize: 15,
        lineHeight: 22,
        color: '#fff5f9',
        textAlign: 'center',
    },

    card: {
        gap: 8,
        padding: 16,
        borderRadius: 20,
        backgroundColor: '#ffffff',
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#d94f82',
    },

    cardItem: {
        fontSize: 14,
        lineHeight: 21,
        color: '#8f3d61',
    },
});
