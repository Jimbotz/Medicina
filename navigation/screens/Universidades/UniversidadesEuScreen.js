import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Button, Card, Title } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

const UniversidadesEuScreen = ({ navigation }) => {
  let [loaded] = useFonts({
    Abril: require("../../../assets/Fonts/AbrilFatface-Regular.ttf"),
    Russo: require("../../../assets/Fonts/RussoOne-Regular.ttf"),
    TomorrowRegular: require("../../../assets/Fonts/Tomorrow-Regular.ttf"),
    TomorrowSemiBold: require("../../../assets/Fonts/Tomorrow-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <ScrollView>
        <StatusBar hidden />
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
            Universidad Harvard.
          </Title>
          <Card.Cover
            source={{
              uri: "https://epc-ucb.edu.bo/epc/images/harvard/c16194787837b42a12568419833c514b.jpg",
            }}
            style={{}}
          ></Card.Cover>
          <Card.Actions>
            <Button
              onPress={() => navigation.navigate("Universidad1Eu")}
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
            Universidad de Oxford.
          </Title>
          <Card.Cover
            source={{
              uri: "https://th.bing.com/th/id/R.6585cc4eb01e85f667f9c2d1daf3df9e?rik=%2bzy5mlcvfPw9lg&pid=ImgRaw&r=0",
            }}
            style={{}}
          ></Card.Cover>
          <Card.Actions>
            <Button
              onPress={() => navigation.navigate("Universidad2Eu")}
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
            Universidad de Cambridge
          </Title>
          <Card.Cover
            source={{
              uri: "https://th.bing.com/th/id/R.b01282e4d11880a5630c53db4165f7f8?rik=JYwGxHbWrfMfEQ&pid=ImgRaw&r=0",
            }}
            style={{}}
          ></Card.Cover>
          <Card.Actions>
            <Button
              onPress={() => navigation.navigate("Universidad3Eu")}
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

export default UniversidadesEuScreen;
