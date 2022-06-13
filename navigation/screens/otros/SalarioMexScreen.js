import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "@expo-google-fonts/dev";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';


const CONTENT = {
    tableHead: ['Experiencia', 'Salario mensual'],
    tableData: [
      ['Médico general del IMSS', 'entre 7 mil 941 y 8 mil 367 pesos libres de impuestos'],
      ['Médico general del ISSSTE', 'entre 7 mil 941 y 8 mil 367 pesos libres de impuestos'],
      ['Médicos especializados ', ' 13 mil 288 pesos has 30 mil pesos'],
      ['Médico especialista en hospital privado', 'entre 8 mil y 19 mil pesos al mes.'],
    ],
  };

const SalarioMexScreen = () => {
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
      <Text style={{ fontFamily: "TomorrowRegular", textAlign: "center", fontSize: 20, marginTop: 10 }}>Tabla con algunos ejemplares de trabajos</Text>
      <View style={styles.container}>
      <Table >
        <Row
          data={CONTENT.tableHead}
          flexArr={[1, 1]}
          style={styles.head}
          textStyle={ {margin:10, textAlign: "center"}}
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
    </View>
  );
};

export default SalarioMexScreen;


const styles = StyleSheet.create({
    container: { flex: 1, padding: 18, backgroundColor: '#fff' },
    head: { height: 60, backgroundColor: 'orange' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#2ecc71' },
    row: { height: 50, margin: 8 },
    text: { textAlign: 'center' },
  });

  /*     <DataTable>
        <DataTable.Header>
          <DataTable.Title> <Text style={{textAlign: "center"}}> Experiencia </Text> </DataTable.Title>
          <DataTable.Title > <Text style={{textAlign: "center"}}> Mensual </Text> </DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <ScrollView horizontal>
            <DataTable.Cell>Médico general del IMSS</DataTable.Cell>
            <DataTable.Cell>
              {" "}
              entre 7 mil 941 y 8 mil 367 pesos libres de impuestos
            </DataTable.Cell>
          </ScrollView>
        </DataTable.Row>

        <DataTable.Row>
          <ScrollView horizontal>
            <DataTable.Cell>Médico general del ISSSTE</DataTable.Cell>
            <DataTable.Cell>
              entre 7 mil 941 y 8 mil 367 pesos libres de impuestos
            </DataTable.Cell>
          </ScrollView>
        </DataTable.Row>

        <DataTable.Row>
          <ScrollView horizontal>
            <DataTable.Cell>Mei</DataTable.Cell>
            <DataTable.Cell>mei@kindacode.com</DataTable.Cell>
            <DataTable.Cell numeric>23</DataTable.Cell>
          </ScrollView>
        </DataTable.Row>
      </DataTable>
*/