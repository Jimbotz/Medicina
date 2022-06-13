import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import UniversidadesMexScreen from "./screens/Universidades/UniversidadesMexScreen";
import UniversidadesEuScreen from "./screens/Universidades/UniversidadesEuScreen";
import OportunidadesScreen from "./screens/OportunidadesScreen";
import UniversidadesScreen from "./screens/UniversidadesScreen";
import AcercaDeScreen from "./screens/AcercaDeScreen";
import SalarioMexScreen from "./screens/otros/SalarioMexScreen";
import SalarioEuScreen from "./screens/otros/SalarioEuScreen";
import Universidad1Screen from "./screens/Universidades/Mexico/Universidad1Screen";
import Universidad2Screen from "./screens/Universidades/Mexico/Universidad2Screen";
import Universidad3Screen from "./screens/Universidades/Mexico/Universidad3Screen";
import EuUniversidad1Screen from "./screens/Universidades/EstadosUnidos/EuUniversidad1Screen";
import EuUniversidad2Screen from "./screens/Universidades/EstadosUnidos/EuUniversidad2Screen";
import EuUniversidad3Screen from "./screens/Universidades/EstadosUnidos/EuUniversidad3Screen";

const Stack = createNativeStackNavigator();

function Principal() {
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen
        name="Universidades2"
        component={UniversidadesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UniversidadesenMéxico"
        component={UniversidadesMexScreen}
        options={{ title: "Universidades en México" }}
      />
      <Stack.Screen
        name="UniversidadesenEstadosUnidos"
        component={UniversidadesEuScreen}
        options={{ title: "Universidades en EU" }}
      />

      <Stack.Screen
        name="Universidad1Mex"
        component={Universidad1Screen}
        options={{ title: "Universidad Autonoma De Guadalajara" }}
      />
      <Stack.Screen
        name="Universidad2Mex"
        component={Universidad2Screen}
        options={{ title: "Universiadad Popular Autonoma Del Estado De Puebla" }}
      />
      <Stack.Screen
        name="Universidad3Mex"
        component={Universidad3Screen}
        options={{ title: " Benemérita Universidad Autónoma de Puebla" }}
      />

<Stack.Screen
        name="Universidad1Eu"
        component={EuUniversidad1Screen}
        options={{ title: "Universidad Autonoma De Guadalajara" }}
      />
      <Stack.Screen
        name="Universidad2Eu"
        component={EuUniversidad2Screen}
        options={{ title: "Universiadad Popular Autonoma Del Estado De Puebla" }}
      />
      <Stack.Screen
        name="Universidad3Eu"
        component={EuUniversidad3Screen}
        options={{ title: " Benemérita Universidad Autónoma de Puebla" }}
      />
    </Stack.Navigator>
  );
}

function Oportunidades() {
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen
        name="OportunidadesLaborales"
        component={OportunidadesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SalarioMex"
        component={SalarioMexScreen}
        options={{ title: "Salario en México" }}
      />
      <Stack.Screen
        name="SalarioEu"
        component={SalarioEuScreen}
        options={{ title: "Salario en Estados Unidos" }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Principal") {
              iconName = focused ? "help-circle" : "help-circle-outline";
            } else if (route.name === "Oportunidades") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "Universidades") {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#EE627E",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: { padding: 5, height: 60 },
        })}
      >
        <Tab.Screen
          name="Principal"
          component={AcercaDeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Oportunidades"
          component={Oportunidades}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Universidades"
          component={Principal}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
