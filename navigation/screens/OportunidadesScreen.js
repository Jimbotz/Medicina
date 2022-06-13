import * as React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { Card, List, Title } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Video } from "expo-av";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

const OportunidadesScreen = ({ navigation }) => {
  const video = React.useRef(null);
  const video2 = React.useRef(null);
  const video3 = React.useRef(null);

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
      <StatusBar hidden />
      <ScrollView>
        <Text
          onPress={() => navigation.navigate("Principal")}
          style={{
            fontSize: 26,
            fontFamily: "TomorrowSemiBold",
            textAlign: "center",
          }}
        >
          Oportunidades laborales
        </Text>
        <Card
          outlined
          style={{ marginHorizontal: 20, borderRadius: 20, marginTop: 10 }}
        >
          <Title style={{ textAlign: "center", fontFamily: "TomorrowRegular" }}>
            Area de oportunidades
          </Title>
          <Card.Cover
            source={{
              uri: "https://th.bing.com/th/id/OIP.dJrwz9i3_oXO6WnldCLHiwHaEA?pid=ImgDet&rs=1",
            }}
          ></Card.Cover>
        </Card>
        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            margin: 10,
            fontFamily: "TomorrowRegular",
          }}
        >
          Los campos laborales de un médico pueden variar dependiendo del tipo
          de especialidad tenga
        </Text>
        <List.Accordion
          title="Posibles trabajos"
          style={{ marginTop: 10 }}
          titleStyle={{ color: "#EE627E", fontFamily: "TomorrowRegular" }}
        >
          <List.Item
            title="Los médicos generales suelen trabajar en consultorios"
            titleNumberOfLines={5}
          />
          <List.Item
            title="Con posgrado puede tener alguno de atención primaria, especialidades médicas quirúrgicas, especialidad: médico–quirúrgicas, cargos institucionales y administrativos"
            titleNumberOfLines={7}
          />
          <List.Item
            title="Asistencial,
            investigación, docencia, administrativa, informativa"
            titleNumberOfLines={7}
          />
        </List.Accordion>

        <List.Accordion
          title="Salarios"
          style={{ marginTop: 10 }}
          titleStyle={{ color: "#EE627E", fontFamily: "TomorrowRegular" }}
        >
          <List.Item
            title="En México"
            titleNumberOfLines={5}
            onPress={() => navigation.navigate("SalarioMex")}
          />
          <List.Item
            title="En Estados Unidos"
            titleNumberOfLines={7}
            onPress={() => navigation.navigate("SalarioEu")}
          />
        </List.Accordion>

        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontFamily: "Russo",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Entrevistas a expertos en el trabajo
        </Text>
        <Video
          ref={video}
          style={{ width: "100%", height: 200, marginTop: 10 }}
          source={require("../../assets/videos/Entrevista_1.mp4")}
          useNativeControls
          resizeMode="contain"
          isLooping
        />

        <Video
          ref={video2}
          style={{ width: "100%", height: 200, marginTop: 10 }}
          source={require("../../assets/videos/Entrevista_2.mp4")}
          useNativeControls
          resizeMode="contain"
          isLooping
        />
        <View style={{marginHorizontal:20, marginBottom:10, marginTop: 10}}>
          <Button
            title="Ver entrevistas"
            color={"#EE627E"}
            onPress={() =>
              Linking.openURL(
                "https://photos.google.com/share/AF1QipOSumZug9MhHn760U2svUDdmFNNLh-ba-JfWl06vHavnCGi9aS19BLXQNucaGgbAA?key=Q05vZ1NRZFlTdUVYUWJxeHVHa0F4QWpVVHYwVlN3"
              )
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OportunidadesScreen;
