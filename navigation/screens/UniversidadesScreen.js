import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Button, Card, Title } from "react-native-paper";
/*import {
  AbrilFatface_400Regular,
  RussoOne_400Regular,
  Tomorrow_400Regular,
  Tomorrow_600SemiBold,
} from "@expo-google-fonts/dev"; */
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

const UniversidadesScreen = ({ navigation }) => {
  let [loaded] = useFonts({
    Abril: require("../../assets/Fonts/AbrilFatface-Regular.ttf"),
    Russo: require("../../assets/Fonts/RussoOne-Regular.ttf"),
    TomorrowRegular: require("../../assets/Fonts/Tomorrow-Regular.ttf"),
    TomorrowSemiBold: require("../../assets/Fonts/Tomorrow-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <ScrollView>
        <StatusBar hidden />
        <Text
          style={{
            fontSize: 26,
            fontFamily: "TomorrowSemiBold",
            textAlign: "center",
          }}
        >
          Mejores universidades
        </Text>

        <Card
          outlined
          style={{
            marginHorizontal: 10,
            borderRadius: 20,
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <Title style={{ textAlign: "center", margin: 5 }}>
            Universidades en México que ofrecen la carrera de Medicina
          </Title>
          <Card.Cover
            source={{
              uri: "https://encuentratubeca.mx/wp-content/uploads/2020/08/becas-mexico-2020-buap-inscripciones.jpg",
            }}
            style={{}}
          ></Card.Cover>
          <Card.Actions>
            <Button
              onPress={() => navigation.navigate("UniversidadesenMéxico")}
              style={{ width: "100%" }}
            >
              <Text style={{ color: "#EE627E", textAlign: "center" }}>Ver</Text>
            </Button>
          </Card.Actions>
        </Card>

        <Card
          outlined
          style={{
            marginHorizontal: 10,
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <Title style={{ textAlign: "center", margin: 5 }}>
            Universidades en Estados Unidos que ofrecen la carrera de Medicina
          </Title>
          <Card.Cover
            source={{
              uri: "https://d1bvpoagx8hqbg.cloudfront.net/originals/cuales-son-mejores-universidades-estados-unidos-a6893f70a435aa8722adade9f839a4b2.jpg",
            }}
            style={{}}
          ></Card.Cover>
          <Card.Actions>
            <Button
              onPress={() =>
                navigation.navigate("UniversidadesenEstadosUnidos")
              }
              style={{ width: "100%" }}
            >
              <Text style={{ color: "#EE627E", textAlign: "center" }}>Ver</Text>
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </View>
  );
};

export default UniversidadesScreen;
