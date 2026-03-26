import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import AllNews from "../screens/AllNews";

const Stack = createStackNavigator();

const HomeStackNavigator = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#47daff",
      },
    }}
  >
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const AllNewsStackNavigator = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#47daff",
      },
    }}
  >
    <Stack.Screen name="AllNews" component={AllNews} />
  </Stack.Navigator>
);


export {HomeStackNavigator, AllNewsStackNavigator};
