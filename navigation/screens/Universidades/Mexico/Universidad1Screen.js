import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { List } from "react-native-paper";
import { useFonts } from "expo-font";

import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from "react-native-table-component";

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

const Universidad1Screen = () => {
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
            uri: "https://laregionenlinea.com.mx/wp-content/uploads/UAG-otorga-Beca-Honoris-Causa.jpg",
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
          Autobiografía de mínimo 2 hojas (aspectos académicos, sociales,
          culturales y deportivos).
        </Text>

        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "TomorrowRegular",
          }}
        >
          Acta de nacimiento reciente (máximo 6 meses).
        </Text>

        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "TomorrowRegular",
          }}
        >
          Certificado de preparatoria (en caso de no contar con él, puede ser
          constancia de estudios con promedio o kardex)
        </Text>

        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "TomorrowRegular",
          }}
        >
          Comprobante de domicilio.
        </Text>

        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "TomorrowRegular",
          }}
        >
          CURP
        </Text>

        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "TomorrowRegular",
          }}
        >
          Fotografía reciente (fondo blanco).
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
          title="Formación universitaria"
          left={(props) => (
            <List.Icon {...props} icon="bookmark" color="#EE627E" />
          )}
        >
          <List.Item title="Medicina Humanistica y Psicología Médica" />
          <List.Item title="Ética Médica y Profesionalismo" />
        </List.Accordion>

        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Formación básica"
          left={(props) => (
            <List.Icon {...props} icon="bookmark" color="#EE627E" />
          )}
        >
          <List.Item title="Anatomía humana" />
          <List.Item title="Embriología y Fundamentos de Genética" />
          <List.Item title="Histología y Biología Celular" />
          <List.Item title="Bioquimica y Biología Molecular" />
          <List.Item title="Microbiología" />
          <List.Item title="Fisiopatología" />
        </List.Accordion>

        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Formación disciplinaria"
          left={(props) => (
            <List.Icon {...props} icon="bookmark" color="#EE627E" />
          )}
        >
          <List.Item title="Medicina Legal y FOrense" />
          <List.Item title="Medicina Interna" />
          <List.Item title="Infectología y Dermatología" />
          <List.Item title="Ginecología y Obstetricia" />
          <List.Item title="Pedríatria y Principios de Neonatología" />
          <List.Item title="Ortopedia" />
        </List.Accordion>

        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Formación profesional"
          left={(props) => (
            <List.Icon {...props} icon="bookmark" color="#EE627E" />
          )}
        >
          <List.Item title="Psiquiatría" />
          <List.Item title="Neurología" />
          <List.Item title="Otorrinolaringología" />
          <List.Item title="Oftalmología" />
          <List.Item title="Gerontología y Geriatría" />
          <List.Item title="Cirugía" />
        </List.Accordion>

        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Optativas"
          left={(props) => (
            <List.Icon {...props} icon="account-question" color="#EE627E" />
          )}
        >
          <List.Item title="Área de Bioética" />
          <List.Item title="Área de Ciclo Básico" />
          <List.Item title="Área de Ciclo Clínico" />
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
          <List.Item title="Desarrollo de unvestigación" />
        </List.Accordion>

        <View style={styles.container}>
          <Table>
            <Row
              data={CONTENT.tableHead}
              flexArr={[1, 1]}
              style={styles.head}
              textStyle={{ margin: 10, textAlign: "center" }}
            />
            <TableWrapper style={styles.wrapper}>
              <Col
                data={CONTENT.tableTitle}
                style={styles.title}
                heightArr={[30, 30]}
                textStyle={styles.text}
              />
              <Rows
                data={CONTENT.tableData}
                flexArr={[1, 1]}
                style={styles.row}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
        </View>
      </ScrollView>
    </View>
  );
};

export default Universidad1Screen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, backgroundColor: "#fff" },
  head: { height: 60, backgroundColor: "#EE627E" },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#2ecc71" },
  row: { height: 50, margin: 8 },
  text: { textAlign: "center" },
});
