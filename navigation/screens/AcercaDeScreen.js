import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Animated,
  ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const imagenes = [
  "https://blog.monex.com.mx/hubfs/blog/Medicina-espacial.jpg#keepProtocol",
  "https://th.bing.com/th/id/R.e51b32f4e95e03c179d13d19de4f2433?rik=jT1f48StUPwF1w&pid=ImgRaw&r=0",
  "https://www.portalpolitico.tv/sites/portalpolitico.tv/files/styles/grande_1024x1024/public/photos/noticia/medicina.jpg?itok=NyCkWw7j",
  "https://th.bing.com/th/id/OIP.QfV1vK6LKVTHfd6iP_0i9gHaE8?pid=ImgDet&rs=1",
  "https://th.bing.com/th/id/R.a7a3a82a2be34817562d0cfd8c0afc54?rik=F%2fSlcRualbSjtQ&pid=ImgRaw&r=0",
  "https://estudiaenrusia.com/wp-content/uploads/2020/03/medicina2.jpg",
  "https://res.cloudinary.com/upcbinary/image/upload/q_auto:good/v1573493358/pregrado/imagenes/OG/carrera-medicina.jpg",
];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;
const ALTURA_BACKDROP = height * 0.5;

function Backdrop({ scrollX }) {
  return (
    <View
      style={[
        {
          position: "absolute",
          height: ALTURA_BACKDROP,
          top: 0,
          width: width,
        },
        StyleSheet.absoluteFillObject,
      ]}
    >
      {imagenes.map((imagen, index) => {
        const inputRange = [
          (index - 1) * ANCHO_CONTENEDOR,
          index * ANCHO_CONTENEDOR,
          (index + 1) * ANCHO_CONTENEDOR,
        ];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        return (
          <Animated.Image
            key={index}
            source={{ uri: imagen }}
            style={[
              { width: width, height: ALTURA_BACKDROP, opacity },
              StyleSheet.absoluteFillObject,
            ]}
          />
        );
      })}
      <LinearGradient
        colors={["transparent", "white"]}
        style={{
          width,
          height: ALTURA_BACKDROP,
          position: "absolute",
          bottom: 0,
        }}
      />
    </View>
  );
}

const AcercaDeScreen = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  let [loaded] = useFonts({
    Abril: require("../../assets/Fonts/AbrilFatface-Regular.ttf"),
    Russo: require("../../assets/Fonts/RussoOne-Regular.ttf"),
    TomorrowRegular: require("../../assets/Fonts/Tomorrow-Regular.ttf"),
    TomorrowSemiBold: require("../../assets/Fonts/Tomorrow-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  /*if (!fontsLoaded) {
    return <AppLoading />;
  }*/

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar hidden />
        <Backdrop scrollX={scrollX} />
        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          snapToAlignment="start"
          contentContainerStyle={{
            paddingTop: 200,
            paddingHorizontal: ESPACIO_CONTENEDOR,
          }}
          snapToInterval={ANCHO_CONTENEDOR}
          decelerationRate={0}
          scrollEventThrottle={16}
          data={imagenes}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * ANCHO_CONTENEDOR,
              index * ANCHO_CONTENEDOR,
              (index + 1) * ANCHO_CONTENEDOR,
            ];

            const scrollY = scrollX.interpolate({
              inputRange,
              outputRange: [0, -50, 0],
            });
            return (
              <View style={{ width: ANCHO_CONTENEDOR }}>
                <Animated.View
                  style={{
                    marginHorizontal: ESPACIO,
                    padding: ESPACIO,
                    borderRadius: 34,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    transform: [{ translateY: scrollY }],
                  }}
                >
                  <Image source={{ uri: item }} style={styles.posterImage} />
                  <Text
                    style={{
                      fontFamily: "Russo",
                      fontSize: 26,
                      color: "#EE627E",
                    }}
                  >
                    ACERCA DE
                  </Text>
                </Animated.View>
              </View>
            );
          }}
        />
        <Text
          style={{
            marginHorizontal: 20,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          La licenciatura en medicina, también conocido como medicina general
          puede durar entre 6 o 7 años: dependiendo la universidad son 4 o 5
          años de clases, más un año de internado, más un año de servicio
          social. Mientras los estudiantes de otras carreras egresan al cuarto o
          quinto año y comienzan a trabajar y obtener ingresos, los estudiantes
          de medicina requieren del apoyo de sus padres por más tiempo.
        </Text>

        <Text
          style={{
            marginHorizontal: 20,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          De acuerdo con el portal Compara Carreras del IMCO, la carrera de
          medicina es la carrera más demandada en nuestro país, pero también es
          la mejor pagada. La inversión necesaria para estudiar la carrera de
          medicina entre una universidad pública y una privada tiene una
          diferencia de más de un millón de pesos y mientras un egresado de una
          universidad pública recupera su inversión en casi 5 meses, un egresado
          de la carrera de medicina no recupera su inversión sino hasta 10 años
          después. Los pasantes médicos, es decir,
          <Text style={{ color: "#EE627E" }}>
            aquellos que estén realizando su servicio social, reciben una beca
            cuyo monto varía en las condiciones y zona geográfica en las que
            realicen su trabajo.
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  posterImage: {
    width: "100%",
    height: ANCHO_CONTENEDOR * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});

export default AcercaDeScreen;
