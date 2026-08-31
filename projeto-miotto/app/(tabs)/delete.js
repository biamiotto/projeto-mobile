import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const API_KEY = "cv_abDkjvFLznGPXnFtFrqpke7meW8SbeQKXVvYczGupSf_MT4jG8e4KkKYkPNfvzXZ";

const api = axios.create({
  baseURL: "https://api-ds.codeverse.dev.br",
  headers: {
    "x-api-key": API_KEY,
  },
});

export default function JogosExcluirScreen() {
  const [jogos, setJogos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [excluindoId, setExcluindoId] = useState(null);

  async function buscarJogos() {
    setCarregando(true);
    setErro(null);

    try {
      const resposta = await api.get("/api/jogos", {
        params: { limit: 50 },
      });

      setJogos(resposta.data.data);
    } catch (e) {
      setErro("Não foi possível carregar os jogos. Tenta de novo em instantes.");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarJogos();
  }, []);

  async function excluirJogo(id) {
    setExcluindoId(id);

    try {
      await api.delete(`/api/jogos/${id}`);

      setJogos((atual) => atual.filter((item) => item.id !== id));
    } catch (e) {
      Alert.alert(
        "Não deu pra excluir o jogo",
        "A API respondeu com erro. Tenta de novo em instantes."
      );
    } finally {
      setExcluindoId(null);
    }
  }

  function confirmarExclusao(jogo) {
    Alert.alert(
      "Excluir jogo",
      `Tem certeza que quer excluir "${jogo.title}"? Essa ação não pode ser desfeita.`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => excluirJogo(jogo.id),
        },
      ]
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.header}>
          <Text style={styles.tituloPagina}>Excluir jogo</Text>
          <Text style={styles.subtitulo}>DELETE /api/jogos/:id</Text>
        </View>

        {carregando && (
          <ActivityIndicator style={{ marginVertical: 16 }} />
        )}

        {erro && <Text style={styles.erro}>{erro}</Text>}

        {!carregando &&
          jogos.map((jogo) => (
            <View key={jogo.id} style={styles.card}>
              {jogo.imageUrl ? (
                <Image
                  source={{ uri: jogo.imageUrl }}
                  style={styles.imagem}
                />
              ) : (
                <View style={styles.imagemSemFoto}>
                  <Text style={styles.imagemTexto}>🎮</Text>
                </View>
              )}

              <View style={styles.info}>
                <Text style={styles.titulo}>{jogo.title}</Text>

                <Text style={styles.categoria}>
                  {jogo.genero} · {jogo.plataforma}
                </Text>
              </View>

              <Pressable
                style={styles.botaoExcluir}
                onPress={() => confirmarExclusao(jogo)}
                disabled={excluindoId === jogo.id}
              >
                <Text style={styles.botaoExcluirTexto}>
                  {excluindoId === jogo.id ? "..." : "Excluir"}
                </Text>
              </Pressable>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff0f6",
  },
  conteudo: {
    padding: 24,
    paddingBottom: 48,
  },
  header: {
    marginBottom: 16,
  },
  tituloPagina: {
    fontSize: 24,
    fontWeight: "800",
    color: "#e65da8",
  },
  subtitulo: {
    fontSize: 14,
    color: "#a34d7d",
    marginTop: 2,
  },
  erro: {
    color: "#c62828",
    marginTop: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 12,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    paddingRight: 12,
  },
  imagem: {
    width: 64,
    height: 64,
  },
  imagemSemFoto: {
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fde1f0",
  },
  imagemTexto: {
    fontSize: 26,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "700",
    color: "#102542",
  },
  categoria: {
    fontSize: 13,
    color: "#a34d7d",
  },
  botaoExcluir: {
    backgroundColor: "#e65da8",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  botaoExcluirTexto: {
    color: "white",
    fontWeight: "700",
    fontSize: 13,
  },
});

