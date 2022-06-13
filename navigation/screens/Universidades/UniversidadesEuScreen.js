import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Button, Card, Title } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

const UniversidadesEuScreen = ({navigation}) => {

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
              uri: "https://laregionenlinea.com.mx/wp-content/uploads/UAG-otorga-Beca-Honoris-Causa.jpg",
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
              uri: "https://www.poblanerias.com/wp-content/archivos/2016/07/UPAEP-CAMPUS_032.jpg",
            }}
            style={{}}
          ></Card.Cover>
          <Card.Actions>
            <Button
              onPress={() =>
                navigation.navigate("Universidad2Eu")
              }
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
              uri: "https://th.bing.com/th/id/R.b52b097b1dbd112dbe2e04987a1f5665?rik=cvYOPIRkpgubzw&riu=http%3a%2f%2fsic.cultura.gob.mx%2fimages%2f47967&ehk=rZNv1z1AOtCCDJncnbSInB4VjN1zaqNNvp3GL%2bPEvZA%3d&risl=&pid=ImgRaw&r=0",
            }}
            style={{}}
          ></Card.Cover>
          <Card.Actions>
            <Button
              onPress={() =>
                navigation.navigate("Universidad3Eu")
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

export default UniversidadesEuScreen;
