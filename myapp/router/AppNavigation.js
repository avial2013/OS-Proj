import React from "react";

// NavigationContainer - gives the root navigator.
import { NavigationContainer } from "@react-navigation/native";
// createNativeStackNavigator - create stack navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

// import screens:
import HomeScreen from "../screens/HomeScreen";
import RestaurantDetails from "../screens/RestaurantDetails";
import NewForm from "../screens/NewForm";
import NewRestaurant from "../screens/NewRestaurant";

// creat a new stack navigator
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      {/* the default navigation will be the home screen*/}
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />

        <Stack.Screen
          name="RestaurantDetails"
          component={RestaurantDetails}
          options={({ route, navigation }) => ({
            title: route.params.restaurantTitle,
            headerRight: () => (
              <Icon
                onPress={() => navigation.navigate("HomeScreen", { HomeScreen })}
                name="home"
                style={{ fontSize: 35, margin: 10 }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="NewForm"
          component={NewForm}
          options={({ route, navigation }) => ({
            title: "New Form",
            headerRight: () => (
              <Icon
                onPress={() => navigation.navigate("HomeScreen", { HomeScreen })}
                name="home"
                style={{ fontSize: 35, margin: 10 }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="NewRestaurant"
          component={NewRestaurant}
          options={({ route, navigation }) => ({
            title: "New Restaurant",
            headerRight: () => (
              <Icon
                onPress={() => navigation.navigate("HomeScreen", { HomeScreen })}
                name="home"
                style={{ fontSize: 35, margin: 10 }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
