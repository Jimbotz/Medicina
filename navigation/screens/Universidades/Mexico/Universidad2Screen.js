import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { List } from "react-native-paper";

import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from "react-native-table-component";

const CONTENT = {
  tableHead: ["Beca ordinaria"],
  tableData: [
    ["Ser estudiante de la UPAEP"],
    ["Entrevista y sellado en una fecha marcada"],
    ["Segunda entrevista con el director"],
    ["Solicitud de la beca"],
  ],
};

const Universidad2Screen = () => {
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
            uri: "https://www.poblanerias.com/wp-content/archivos/2016/07/UPAEP-CAMPUS_032.jpg",
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
          Realizar registro en linea
        </Text>
        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "TomorrowRegular",
          }}
        >
          Llenar solicitud y subir a la plataforma{" "}
        </Text>
        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "TomorrowRegular",
          }}
        >
          Realizar examen
        </Text>
        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "TomorrowRegular",
          }}
        >
          Consulta gastos de colegiaturas{" "}
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
          title="Primer semestre"
          left={(props) => (
            <List.Icon {...props} icon="bookmark" color="#EE627E" />
          )}
        >
          <List.Item title="Persona y Verdad" />
          <List.Item title="Ingl??s Avanzado" />
          <List.Item title="Morfologia Humana con Orientaci??n Clinica" />
          <List.Item title="Citologia e Histologia" />
          <List.Item title="Inmunologia Celular y Molecular" />
        </List.Accordion>
        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Segundo semestre"
          left={(props) => (
            <List.Icon {...props} icon="bookmark" color="#EE627E" />
          )}
        >
          <List.Item title="Persona y Libertad" />
          <List.Item title="Ingl??s Avanzado" />
          <List.Item title="Bioquimica y Biologia Molecular" />
          <List.Item title="Farmacologia B??sica" />
          <List.Item title="Microbiologia General" />
          <List.Item title="Fisiologia de los Tejidos Excitables" />
        </List.Accordion>
        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Tercer semestre"
          left={(props) => (
            <List.Icon {...props} icon="bookmark" color="#EE627E" />
          )}
        >
          <List.Item title="Persona, Familia y Sociedad" />
          <List.Item title="Persona e Identidad Mexicana" />
          <List.Item title="Perspectiva Global " />
          <List.Item title="Anatomia Patol??gica 1" />
          <List.Item title="Microbiologia Clinica 1" />
          <List.Item title="Fisiologia Sist??mica" />
        </List.Accordion>
        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Cuarto semestre"
          left={(props) => (
            <List.Icon {...props} icon="bookmark" color="#EE627E" />
          )}
        >
          <List.Item title="Psiquiatr??a" />
          <List.Item title="Neurolog??a" />
          <List.Item title="Otorrinolaringolog??a" />
          <List.Item title="Oftalmolog??a" />
          <List.Item title="Gerontolog??a y Geriatr??a" />
          <List.Item title="Cirug??a" />
        </List.Accordion>
        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Quinto semestre"
          left={(props) => (
            <List.Icon {...props} icon="bookmark" color="#EE627E" />
          )}
        >
          <List.Item title="Psiquiatr??a" />
          <List.Item title="Neurolog??a" />
          <List.Item title="Otorrinolaringolog??a" />
          <List.Item title="Oftalmolog??a" />
          <List.Item title="Gerontolog??a y Geriatr??a" />
          <List.Item title="Cirug??a" />
        </List.Accordion>
        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Sexto semestre"
          left={(props) => (
            <List.Icon {...props} icon="bookmark" color="#EE627E" />
          )}
        >
          <List.Item title="Psiquiatr??a" />
          <List.Item title="Neurolog??a" />
          <List.Item title="Otorrinolaringolog??a" />
          <List.Item title="Oftalmolog??a" />
          <List.Item title="Gerontolog??a y Geriatr??a" />
          <List.Item title="Cirug??a" />
        </List.Accordion>
        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Septimo semestre"
          left={(props) => (
            <List.Icon {...props} icon="bookmark" color="#EE627E" />
          )}
        >
          <List.Item title="Psiquiatr??a" />
          <List.Item title="Neurolog??a" />
          <List.Item title="Otorrinolaringolog??a" />
          <List.Item title="Oftalmolog??a" />
          <List.Item title="Gerontolog??a y Geriatr??a" />
          <List.Item title="Cirug??a" />
        </List.Accordion>
        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Octavo semestre"
          left={(props) => (
            <List.Icon {...props} icon="bookmark" color="#EE627E" />
          )}
        >
          <List.Item title="Psiquiatr??a" />
          <List.Item title="Neurolog??a" />
          <List.Item title="Otorrinolaringolog??a" />
          <List.Item title="Oftalmolog??a" />
          <List.Item title="Gerontolog??a y Geriatr??a" />
          <List.Item title="Cirug??a" />
        </List.Accordion>

        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Noveno semestre"
          left={(props) => (
            <List.Icon {...props} icon="bookmark" color="#EE627E" />
          )}
        >
          <List.Item title="Psiquiatr??a" />
          <List.Item title="Neurolog??a" />
          <List.Item title="Otorrinolaringolog??a" />
          <List.Item title="Oftalmolog??a" />
          <List.Item title="Gerontolog??a y Geriatr??a" />
          <List.Item title="Cirug??a" />
        </List.Accordion>

        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Decimo semestre"
          left={(props) => (
            <List.Icon {...props} icon="bookmark" color="#EE627E" />
          )}
        >
          <List.Item title="Ginecologia y Obstetricia Clinica" />
          <List.Item title="Urgencias" />
          <List.Item title="Atenci??n en el Primer Nivel" />
        </List.Accordion>


        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Optativas"
          left={(props) => (
            <List.Icon {...props} icon="account-question" color="#EE627E" />
          )}
        >
          <List.Item title="??rea de Bio??tica" />
          <List.Item title="??rea de Ciclo B??sico" />
          <List.Item title="??rea de Ciclo Cl??nico" />
        </List.Accordion>
        <List.Accordion
          titleStyle={{ color: "#EE627E" }}
          title="Formaci??n profesional"
          left={(props) => (
            <List.Icon {...props} icon="book-account" color="#EE627E" />
          )}
        >
          <List.Item title="Excelencia Acad??mica" />
          <List.Item title="Examen General de Conocimientos" />
          <List.Item title="Tesis" />
          <List.Item title="Desarrollo de investigaci??n" />
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

export default Universidad2Screen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, backgroundColor: "#fff" },
  head: { height: 60, backgroundColor: "#EE627E" },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#2ecc71" },
  row: { height: 50, margin: 8 },
  text: { textAlign: "center" },
});
