import { Link } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const gatinhoLogo = require('../../assets/logo.png');

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.hero}>
                    <Image source={gatinhoLogo} style={styles.logo} resizeMode="contain" />

                    <Text style={styles.eyebrow}>♡ meu site ♡</Text>

                    <Text style={styles.title}>Oii, seja bem-vindo!</Text>

                    <Text style={styles.description}>
                        Esse é o meu projeto, onde compartilho um pouquinho sobre mim,
                        o que estou aprendendo e algumas das coisas que amo.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>O que você vai encontrar por aqui? 🎀</Text>

                    <Text style={styles.cardItem}>• Um pouquinho sobre mim</Text>
                    <Text style={styles.cardItem}>• Coisas que estou aprendendo</Text>
                    <Text style={styles.cardItem}>• Algumas das coisas que amo</Text>
                    <Text style={styles.cardItem}>• Um pouco do meu mundo ♡</Text>
                </View>

                <Link href="/favoritos" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Conhecer meus gostos ♡</Text>
                    </Pressable>
                </Link>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff0f6',
    },

    container: {
        flex: 1,
        padding: 24,
        gap: 20,
    },

    hero: {
        alignItems: 'center',
        gap: 10,
        padding: 24,
        borderRadius: 24,
        backgroundColor: '#e65da8',
    },

    logo: {
        width: 120,
        height: 120,
        marginBottom: 4,
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
        fontSize: 32,
        fontWeight: '800',
        color: '#ffffff',
        textAlign: 'center',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#fff5f9',
        textAlign: 'center',
    },

    card: {
        gap: 8,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#ffffff',
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#d94f82',
    },

    cardItem: {
        fontSize: 15,
        color: '#8f3d61',
    },

    button: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 16,
        alignItems: 'center',
        backgroundColor: '#d94f82',
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#ffffff',
    },
});
