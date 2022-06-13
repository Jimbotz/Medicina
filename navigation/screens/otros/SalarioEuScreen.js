import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useFonts } from "@expo-google-fonts/dev";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CONTENT = {
    tableHead: ['Experiencia', 'Salario anual'],
    tableData: [
      ['Cirugía plástica', '$501.000'],
      ['Ortopedia', '$497.000'],
      ['Cardiología', '$423.000'],
      ['Gastroenterología', '$408.000'],

      ['Oftalmología', '$357.000'],
      ['Cirugía General', '$322.000'],
      ['Pulmón', '$321.000'],
      ['Neurología', ' $244.000'],
      ['Pediatría', '$212.000'],

      ['Salud Pública y Preventiva', '$199.000'],
    ],
  };

const SalarioEuScreen = () => {
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
        </ScrollView>
        </View>
      );
    };


export default SalarioEuScreen

const styles = StyleSheet.create({
    container: { flex: 1, padding: 18, backgroundColor: "#fff" },
    head: { height: 60, backgroundColor: "orange" },
    wrapper: { flexDirection: "row" },
    title: { flex: 1, backgroundColor: "#2ecc71" },
    row: { height: 50, margin: 8 },
    text: { textAlign: "center" },
  });
  