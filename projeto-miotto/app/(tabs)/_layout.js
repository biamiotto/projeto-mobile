import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        tabBarActiveTintColor: "#0f62fe",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          headerTitle: "Projeto Base",
        }}
      />
      <Tabs.Screen
        name="aulas"
        options={{
          title: "Aprendizado",
          headerTitle: "Conteúdo",
        }}
      />
      <Tabs.Screen
        name="favoritos"
        options={{
          title: "Meus Gostos",
          headerTitle: "Favoritos",
        }}
      />
      <Tabs.Screen
        name="sobre-mim"
        options={{
          title: "Sobre Mim",
          headerTitle: "Sobre Mim",
        }}
      />
      <Tabs.Screen
        name="api"
        options={{
          title: "Api",
          headerTitle: "Api",
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: "Criar Herói",
          headerTitle: "Criar Herói",
        }}
      />
    </Tabs>
  );
}
