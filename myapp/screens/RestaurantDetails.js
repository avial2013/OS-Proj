import React,{useContext, useEffect, useState} from "react";

import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Context } from "../App";
import styles from "../assets/Style";
import { deleteRestaurant } from "../data/DBdata";

export default function RestaurantDetails({ route, navigation }) {
  
  const {restArray,setRestArray,deleteRest} = useContext(Context);
  const id = route.params.restaurantIndex;

  const currentRestaurant = restArray.find(
    (item) => item.name == route.params.restaurantTitle
  );

  return (
    <View style={styles.mainBackground}>
      <ScrollView>
        <Text style={[styles.content, { fontSize: 40 }]}>{currentRestaurant.name}</Text>

          <View style={[{ alignItems: "center" }]}>
            <Image
              style={[styles.restImage]}
              source={{ uri: currentRestaurant.img }}
              resizeMode="cover"
            />
          </View>

          <View style={{ margin: 30, alignItems: "center" }}>
            <Text style={[styles.restContent, { fontSize: 30 }]}>
              Address:
            </Text>
            <Text style={[styles.restContent, { textAlign: "center" }]}>
              {currentRestaurant.address}
            </Text>
          </View>

          <View style={{ margin: 30, alignItems: "center" }}>
            <Text style={[styles.restContent, { fontSize: 30 }]}>
              Opening Hours:
            </Text>
            <Text style={[styles.restContent, { textAlign: "center" }]}>
              {currentRestaurant.openingHours}
            </Text>
          </View>

          <View style={{ margin: 30, alignItems: "center" }}>
            <Text style={[styles.restContent, { fontSize: 30 }]}>
              Contact:
            </Text>
            <Text style={[styles.restContent, { textAlign: "center" }]}>
              {currentRestaurant.contact}
            </Text>
          </View>

          <View style={styles.gradeView}>
            <Text style={[styles.restContent, { fontSize: 25 }]}>
              CURRENT GRADE:
            </Text>
            <Text
              style={[
                styles.restContent,
                { textAlign: "center", fontSize: 20, color: "green" },
              ]}
            >
              {currentRestaurant.grade}
            </Text>
          </View>

        <TouchableOpacity
          style={[styles.navigateButton, {marginBottom: 30}]}
          onPress={() =>
            navigation.navigate("NewForm", {
              name: currentRestaurant.name,
              contact: currentRestaurant.contact
            })
          }
        >
          <Text style={[styles.buttonText]}>CREATE NEW FORM</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
