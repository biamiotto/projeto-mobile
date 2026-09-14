import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const API_KEY = "cv_XdBON7Si_8ajrfHzSD7EpIuTQ7Z7RFRPKkutRgQaxB-YNXxAEuoDQ6sdP8SHXATH";

const api = axios.create({
  baseURL: "https://api-ds.codeverse.dev.br",
  headers: {
    "x-api-key": API_KEY,
  },
});

export default function JogosEditarScreen() {
  const [jogos, setJogos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const [selecionado, setSelecionado] = useState(null);

  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [anoLancamento, setAnoLancamento] = useState("");
  const [desenvolvedora, setDesenvolvedora] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");
  const [salvando, setSalvando] = useState(false);

  async function buscarJogos() {
    setCarregando(true);
    setErro(null);

    try {
      const resposta = await api.get("/api/jogos", {
        params: { limit: 50 },
      });

      setJogos(resposta.data.data);
    } catch (e) {
      setErro("Não foi possível carregar os jogos. Tente de novo em instantes.");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarJogos();
  }, []);

  function selecionarJogo(jogo) {
    setSelecionado(jogo);
    setTitulo(jogo.title ?? "");
    setGenero(jogo.genero ?? "");
    setPlataforma(jogo.plataforma ?? "");
    setAnoLancamento(jogo.ano_lancamento?.toString() ?? "");
    setDesenvolvedora(jogo.desenvolvedora ?? "");
    setImagemUrl(jogo.imageUrl ?? "");
  }

  async function salvarEdicao() {
    if (!selecionado) return;

    if (
      !titulo ||
      !genero ||
      !plataforma ||
      !anoLancamento ||
      !desenvolvedora
    ) {
      Alert.alert("Preencha todos os campos obrigatórios.");
      return;
    }

    setSalvando(true);

    try {
      const resposta = await api.put(`/api/jogos/${selecionado.id}`, {
        title: titulo,
        genero,
        plataforma,
        ano_lancamento: Number(anoLancamento),
        desenvolvedora,
        imageUrl: imagemUrl || null,
      });

      Alert.alert("Jogo atualizado!", resposta.data.data?.title ?? titulo);

      setSelecionado(null);
      buscarJogos();
    } catch (e) {
      Alert.alert(
        "Não deu pra atualizar o jogo",
        "A API respondeu com erro. Confere se todos os campos estão certinhos e tenta de novo."
      );
    } finally {
      setSalvando(false);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.header}>
          <Text style={styles.tituloPagina}>Editar jogo</Text>
          <Text style={styles.subtitulo}>PUT /api/jogos/:id</Text>
        </View>

        {!selecionado && (
          <>
            <Text style={styles.instrucao}>
              Toque em um jogo pra editar:
            </Text>

            {carregando && (
              <ActivityIndicator style={{ marginVertical: 16 }} />
            )}

            {erro && <Text style={styles.erro}>{erro}</Text>}

            {!carregando &&
              jogos.map((item) => (
                <Pressable
                  key={item.id}
                  style={styles.linha}
                  onPress={() => selecionarJogo(item)}
                >
                  <View style={styles.info}>
                    <Text style={styles.linhaTitulo}>{item.title}</Text>
                    <Text style={styles.linhaCategoria}>
                      {item.genero} · {item.ano_lancamento}
                    </Text>
                  </View>

                  <Text style={styles.linhaSeta}>editar ›</Text>
                </Pressable>
              ))}
          </>
        )}

        {selecionado && (
          <>
            <Pressable
              onPress={() => setSelecionado(null)}
              style={styles.voltar}
            >
              <Text style={styles.voltarTexto}>‹ voltar pra lista</Text>
            </Pressable>

            <Text style={styles.rotulo}>Nome do jogo</Text>
            <TextInput
              style={styles.campo}
              value={titulo}
              onChangeText={setTitulo}
              placeholder="Ex: Minecraft"
            />

            <Text style={styles.rotulo}>Gênero</Text>
            <TextInput
              style={styles.campo}
              value={genero}
              onChangeText={setGenero}
              placeholder="Ex: Sandbox"
            />

            <Text style={styles.rotulo}>Plataforma</Text>
            <TextInput
              style={styles.campo}
              value={plataforma}
              onChangeText={setPlataforma}
              placeholder="Ex: PC"
            />

            <Text style={styles.rotulo}>Ano de lançamento</Text>
            <TextInput
              style={styles.campo}
              value={anoLancamento}
              onChangeText={setAnoLancamento}
              placeholder="Ex: 2011"
              keyboardType="numeric"
            />

            <Text style={styles.rotulo}>Desenvolvedora</Text>
            <TextInput
              style={styles.campo}
              value={desenvolvedora}
              onChangeText={setDesenvolvedora}
              placeholder="Ex: Mojang"
            />

            <Text style={styles.rotulo}>URL da imagem</Text>
            <TextInput
              style={styles.campo}
              value={imagemUrl}
              onChangeText={setImagemUrl}
              placeholder="Ex: https://exemplo.com/jogo.jpg"
            />

            <Pressable
              style={styles.botao}
              onPress={salvarEdicao}
              disabled={salvando}
            >
              <Text style={styles.botaoTexto}>
                {salvando ? "Salvando..." : "Salvar alterações"}
              </Text>
            </Pressable>
          </>
        )}
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
  instrucao: {
    fontSize: 14,
    color: "#a34d7d",
    marginBottom: 8,
  },
  erro: {
    color: "#c62828",
    marginTop: 12,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 8,
  },
  info: {
    flex: 1,
  },
  linhaTitulo: {
    fontSize: 15,
    fontWeight: "700",
    color: "#e65da8",
  },
  linhaCategoria: {
    fontSize: 13,
    color: "#a34d7d",
    marginTop: 3,
  },
  linhaSeta: {
    fontSize: 13,
    color: "#e65da8",
    fontWeight: "600",
  },
  voltar: {
    marginBottom: 16,
  },
  voltarTexto: {
    color: "#e65da8",
    fontWeight: "700",
  },
  rotulo: {
    fontSize: 13,
    fontWeight: "600",
    color: "#e65da8",
    marginBottom: 4,
  },
  campo: {
    borderWidth: 1,
    borderColor: "#eeb1e1",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    backgroundColor: "white",
  },
  botao: {
    backgroundColor: "#e65da8",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 4,
  },
  botaoTexto: {
    color: "white",
    fontWeight: "700",
  },
});
