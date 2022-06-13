import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { List } from "react-native-paper";
import { useFonts } from "expo-font";

const CONTENT = {
  tableHead: ["Beca académica", "Beca socioeconómica"],
  tableData: [
    ["Ser estudiante de la AUG", "Ser estudiante de la AUG"],
    ["Tener promedio de 8 en adelante", "Tener promedio de 8 en adelante"],
    ["Llenar la solicitud", "Llenar la solicitud"],
    [
      "Comprobante de ingresos personales y de tutores, con historial academico",
      "Comprobante de ingresos personales y de tutores, con comprobante de domicilio",
    ],
  ],
};

const Universidad3Screen = () => {
  let [loaded] = useFonts({
    Abril: require("../../../../assets/Fonts/AbrilFatface-Regular.ttf"),
    Russo: require("../../../../assets/Fonts/RussoOne-Regular.ttf"),
    TomorrowRegular: require("../../../../assets/Fonts/Tomorrow-Regular.ttf"),
    TomorrowSemiBold: require("../../../../assets/Fonts/Tomorrow-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <ScrollView>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/R.b52b097b1dbd112dbe2e04987a1f5665?rik=cvYOPIRkpgubzw&riu=http%3a%2f%2fsic.cultura.gob.mx%2fimages%2f47967&ehk=rZNv1z1AOtCCDJncnbSInB4VjN1zaqNNvp3GL%2bPEvZA%3d&risl=&pid=ImgRaw&r=0",
          }}
          style={{ width: "100%", height: 210 }}
        />
        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 20,
            fontFamily: "Abril",
          }}
        >
          Convocatoria
        </Text>
        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "TomorrowRegular",
          }}
        >
          Se necesita:
        </Text>
        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "TomorrowRegular",
          }}
        >
          Registro de solicitud (28 de Marzo al 4 de Abril). El registro se hace
          conforme a los apellidos de los aspirantes. Se hace envío de la
          documentación necesaria para el proceso.{" "}
        </Text>
        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "TomorrowRegular",
          }}
        >
          Validación de documentos (29 de marzo al 8 de abril) Durante este
          periodo de tiempo los papeles del alumno son revisados; si cumplen con
          los requisitos, siguen el proceso, si no, se les da otra oportunidad
          de subirlos, o se les cancela el proceso.{" "}
        </Text>
        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "TomorrowRegular",
          }}
        >
          Descarga del comprobante de validación de documentos (30 de marzo a 22
          de abril) Se da este periodo de tiempo a los aspirantes que cumplieron
          con los requisitos solicitados para su documentación, para que
          descarguen e impriman su comprobante que valida lo enviado.
        </Text>
        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "TomorrowRegular",
          }}
        >
          Impresión del formato de asignación de examen (23 a 29 de mayo) En
          este periodo los aspirantes descargan e imprimir el formato donde se
          asigna fecha, lugar y hora para que realicen su examen de admisión.
        </Text>

        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "TomorrowRegular",
          }}
        >
          Aplicación del examen de admisión (1 de junio a 18) Se realiza el
          examen a los aspirantes conforme a su formato de asignación, impreso
          con anterioridad.
        </Text>

        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "TomorrowRegular",
          }}
        >
          Publicación de resultados (9 de julio) Se dan los resultados de los
          aspirantes seleccionados para ingresar a la institución
        </Text>

        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "TomorrowRegular",
          }}
        >
          Inscripción (julio y agosto) Se concluye el proceso de admisión con la
          inscripción de los alumnos aceptados
        </Text>

        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 20,
            fontFamily: "Abril",
          }}
        >
          Plan de estudio
        </Text>
        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Nivel Básico"
          left={(props) => (
            <List.Icon {...props} icon="bookmark" color="#EE627E" />
          )}
        >
          <List.Item title="Lengua Extranjera I" />
          <List.Item title="Formación Humana y Social" />
          <List.Item title=" Lengua Extranjera II" />
          <List.Item title="Desarrollo de Habilidades del Pensamiento Complejo" />
          <List.Item title="Lengua Extranjera III" />
          <List.Item title="Lengua Extranjera IV" />
          <List.Item title="" />
          <List.Item title="Anatomía Integral de Extremidades." />
          <List.Item title="Farmacología I." />
          <List.Item title="Bioquímica I." />
          <List.Item title="Anatomía Integral de Cuello y Tórax." />
          <List.Item title="Bioquímica II." />
          <List.Item
            title="Fisiología I.
            "
          />
          <List.Item
            title="Anatomía Integral de Abdomen.
            "
          />
          <List.Item
            title="Fisiología II.
            "
          />
          <List.Item
            title="Embriología.
            "
          />
        </List.Accordion>
        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Nivel Formativo"
          left={(props) => (
            <List.Icon {...props} icon="bookmark" color="#EE627E" />
          )}
        >
          <List.Item title="Anatomía Patológica." />
          <List.Item
            title="Clínica Propedéutica.
"
          />
          <List.Item
            title="Medicina Familiar.
"
          />
          <List.Item
            title="Medicina Interna.
"
          />
          <List.Item title="Pediatría" />
          <List.Item title="Cirugía" />
          <List.Item title="Urgencias" />
          <List.Item
            title="Servicio Social.
"
          />
          <List.Item title="" />
          <List.Item
            title="Bioética y Derechos Humanos en la Práctica Profesional.
"
          />
          <List.Item
            title="Metodología de la Investigación.
"
          />
          <List.Item title="Bioestadística" />
          <List.Item
            title="Nosología y Clínica del Aparato Respiratorio.
"
          />
          <List.Item
            title="Práctica Clínica I.
"
          />
          <List.Item
            title="Farmacología II.
"
          />
          <List.Item title="Dermatología" />
          <List.Item title="Endocrinología" />
          <List.Item title="Geriatría" />
          <List.Item title="Imagenología" />
          <List.Item title="Neurología" />
          <List.Item title="Psiquiatría" />
          <List.Item title="Reumatología" />
        </List.Accordion>

        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Optativas"
          left={(props) => (
            <List.Icon {...props} icon="account-question" color="#EE627E" />
          )}
        >
          <List.Item title="Optativa I." />
          <List.Item title="Optativa II." />
          <List.Item title="Optativa III." />
          <List.Item title="Optativa V." />
        </List.Accordion>
        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Formación profesional"
          left={(props) => (
            <List.Icon {...props} icon="book-account" color="#EE627E" />
          )}
        >
          <List.Item title="Excelencia Académica" />
          <List.Item title="Examen General de Conocimientos" />
          <List.Item title="Tesis" />
          <List.Item title="Desarrollo de investigación" />
        </List.Accordion>

        <View style={styles.container}>
          <Text style={{ textAlign: "center" }}>Sin becas</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Universidad3Screen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, backgroundColor: "#fff" },
  head: { height: 60, backgroundColor: "#EE627E" },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#2ecc71" },
  row: { height: 50, margin: 8 },
  text: { textAlign: "center" },
});
