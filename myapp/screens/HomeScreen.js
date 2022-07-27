import React, { useState, useEffect, useContext } from "react";
import { Context } from "../App";
import { getRestaurants } from "../data/DBdata";
import { useIsFocused } from "@react-navigation/native";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import styles from "../assets/Style";

import GridTile from "./../components/GridTile";

export default function HomeScreen({ navigation }) {
  const { restArray, setRestArray } = useContext(Context);

  useEffect(() => {
    getRestaurants().then((restaurant) => setRestArray(restaurant));
  }, []);

  let searchInput = "";

  let filteredRestaurant = () => {
    if (searchInput === "") {
      getRestaurants().then((restaurant) => setRestArray(restaurant))
      return;
    }
    setRestArray(
      restArray.filter((item) => {
        return item.name.startsWith(searchInput);
      })
    );
  };

  const renderGridItem = ({ item }) => {
    return (
      <GridTile
        name={item.name}
        onSelect={() => {
          navigation.navigate("RestaurantDetails", {
            restaurantTitle: item.name,
            restaurantIndex: item.index,
          });
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.content, { fontSize: 50 }]}>Home Screen</Text>

      <View style={styles.viewContainer}>
        <TouchableOpacity
          style={styles.HSBtn}
          onPress={() => {
            navigation.navigate("NewRestaurant", {});
          }}
        >
          <Text style={styles.HSText}>New Restaurant</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.userInput}
          placeholder="Search Restaurant"
          keyboardType="default"
          placeholderTextColor={"gray"}
          onChangeText={(text) => {
            searchInput = text;
            filteredRestaurant();
          }}
        />
      </View>

      <FlatList
        contentContainerStyle={styles.flatList}
        keyExtractor={(item, index = 0) =>
          restArray.map((item) => (item.index = index++))
        }
        data={restArray}
        renderItem={renderGridItem}
        numColumns={1}
      />
    </SafeAreaView>
  );
}
