import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const gatinhoLogo = require('../../assets/logo.png');
const minhaFoto = require('../../assets/minha-foto.jpg');

export default function Exemplo() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Image source={gatinhoLogo} style={styles.logo} resizeMode="contain" />

                    <Text style={styles.eyebrow}>SOBRE MIM</Text>

                    <Text style={styles.title}>Um pouco sobre mim</Text>

                    <Text style={styles.subtitle}>
                        Conheça um pouco mais sobre mim, meus interesses e as coisas que fazem parte
                        do meu dia a dia.
                    </Text>
                </View>

                <View style={styles.profileCard}>
                    <Image source={minhaFoto} style={styles.profileImage} resizeMode="cover" />

                    <View style={styles.profileText}>
                        <Text style={styles.profileName}>Beatriz</Text>

                        <Text style={styles.profileDescription}>
                            Sou uma pessoa criativa e curiosa, gosto de tecnologia, jogos e de
                            aprender coisas novas.
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Sobre mim</Text>

                    <Text style={styles.cardText}>
                        Gosto de explorar novas ideias e transformar o que aprendo em projetos.
                        Tenho interesse por tecnologia e desenvolvimento e estou sempre buscando
                        aprender algo diferente.
                    </Text>

                    <Text style={styles.cardText}>
                        Este aplicativo reúne um pouco dos meus interesses e também mostra parte do
                        que estou aprendendo.
                    </Text>
                </View>

                <View style={styles.cardsRow}>
                    <View style={styles.smallCard}>
                        <Text style={styles.smallCardIcon}>🎮</Text>

                        <Text style={styles.smallCardTitle}>Jogos</Text>

                        <Text style={styles.smallCardText}>
                            Gosto de jogar e conhecer jogos diferentes no meu tempo livre.
                        </Text>
                    </View>

                    <View style={styles.smallCard}>
                        <Text style={styles.smallCardIcon}>💻</Text>

                        <Text style={styles.smallCardTitle}>Tecnologia</Text>

                        <Text style={styles.smallCardText}>
                            Estou aprendendo programação e desenvolvimento de aplicativos.
                        </Text>
                    </View>
                </View>

                <View style={styles.loveCard}>
                    <Text style={styles.loveTitle}>Coisas que eu gosto</Text>

                    <View style={styles.loveGrid}>
                        <View style={styles.loveItem}>
                            <Text style={styles.loveEmoji}>🐱</Text>
                            <Text style={styles.loveText}>Gatos</Text>
                        </View>

                        <View style={styles.loveItem}>
                            <Text style={styles.loveEmoji}>🎮</Text>
                            <Text style={styles.loveText}>Jogos</Text>
                        </View>

                        <View style={styles.loveItem}>
                            <Text style={styles.loveEmoji}>💻</Text>
                            <Text style={styles.loveText}>Tecnologia</Text>
                        </View>

                        <View style={styles.loveItem}>
                            <Text style={styles.loveEmoji}>🎀</Text>
                            <Text style={styles.loveText}>Design</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.buttons}>
                    <Pressable style={styles.primaryButton}>
                        <Text style={styles.primaryButtonText}>Meus interesses</Text>
                    </Pressable>

                    <Pressable style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>Sobre meu projeto</Text>
                    </Pressable>
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
        gap: 16,
        paddingBottom: 35,
    },

    header: {
        alignItems: 'center',
        padding: 22,
        borderRadius: 24,
        backgroundColor: '#e65da8',
    },

    logo: {
        width: 100,
        height: 100,
        marginBottom: 6,
    },

    eyebrow: {
        fontSize: 12,
        fontWeight: '800',
        letterSpacing: 2,
        color: '#ffe1ed',
        marginBottom: 5,
    },

    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#ffffff',
        textAlign: 'center',
    },

    subtitle: {
        marginTop: 8,
        fontSize: 15,
        lineHeight: 21,
        color: '#fff5f9',
        textAlign: 'center',
        maxWidth: 320,
    },

    profileCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 18,
        borderRadius: 22,
        backgroundColor: '#ffffff',
    },

    profileImage: {
        width: 105,
        height: 105,
        borderRadius: 52,
        backgroundColor: '#ffe1ed',
        marginRight: 16,
    },

    profileText: {
        flex: 1,
    },

    profileName: {
        fontSize: 24,
        fontWeight: '800',
        color: '#8f3d61',
        marginBottom: 7,
    },

    profileDescription: {
        fontSize: 14,
        lineHeight: 20,
        color: '#8f3d61',
    },

    card: {
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#ffffff',
    },

    cardTitle: {
        fontSize: 19,
        fontWeight: '800',
        color: '#d94f82',
        marginBottom: 10,
    },

    cardText: {
        fontSize: 14,
        lineHeight: 21,
        color: '#8f3d61',
        marginBottom: 8,
    },

    cardsRow: {
        flexDirection: 'row',
        gap: 12,
    },

    smallCard: {
        flex: 1,
        padding: 17,
        borderRadius: 20,
        backgroundColor: '#ffffff',
    },

    smallCardIcon: {
        fontSize: 25,
        marginBottom: 7,
    },

    smallCardTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#d94f82',
        marginBottom: 5,
    },

    smallCardText: {
        fontSize: 13,
        lineHeight: 19,
        color: '#8f3d61',
    },

    loveCard: {
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#ffe1ed',
    },

    loveTitle: {
        fontSize: 19,
        fontWeight: '800',
        color: '#d94f82',
        marginBottom: 14,
    },

    loveGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },

    loveItem: {
        width: '47%',
        padding: 12,
        borderRadius: 15,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
    },

    loveEmoji: {
        fontSize: 20,
        marginRight: 8,
    },

    loveText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#8f3d61',
    },

    buttons: {
        flexDirection: 'row',
        gap: 12,
    },

    primaryButton: {
        flex: 1,
        paddingVertical: 15,
        borderRadius: 16,
        alignItems: 'center',
        backgroundColor: '#d94f82',
    },

    primaryButtonText: {
        fontSize: 15,
        fontWeight: '700',
        color: '#ffffff',
    },

    secondaryButton: {
        flex: 1,
        paddingVertical: 15,
        borderRadius: 16,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#d94f82',
    },

    secondaryButtonText: {
        fontSize: 15,
        fontWeight: '700',
        color: '#d94f82',
    },
});
