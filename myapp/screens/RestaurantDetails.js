import React,{useContext} from "react";

import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Context } from "../App";
import styles from "../assets/Style";

export default function RestaurantDetails({ route, navigation }) {
  
  const {restArray,setRestArray} = useContext(Context)

  const currentRestaurant = restArray.find(
    (item) => item.name == route.params.restaurantTitle
  );

  // How to render each
  // const renderGridItem = ({ item }) => {
  //   return (
  //     <CategoryGridTile
  //       navigateToCategoryScreen={() => {
  //         navigation.navigate("HomeScreen", {
  //         });
  //       }}
  //     />
  //   );
  // };

  return (
    <View style={styles.mainBackground}>
      <ScrollView>
        <Text style={[styles.content, { fontSize: 40 }]}>{currentRestaurant.name}</Text>

          <View style={[{ alignItems: "center" }]}>
            <Image
              style={[styles.productImage]}
              source={{ uri: currentRestaurant.img }}
              resizeMode="cover"
            />
          </View>

          <View style={{ margin: 30, alignItems: "center" }}>
            <Text style={[styles.productContent, { fontSize: 30 }]}>
              Address:
            </Text>
            <Text style={[styles.productContent, { textAlign: "center" }]}>
              {currentRestaurant.address}
            </Text>
          </View>

          <View style={{ margin: 30, alignItems: "center" }}>
            <Text style={[styles.productContent, { fontSize: 30 }]}>
              Opening Hours:
            </Text>
            <Text style={[styles.productContent, { textAlign: "center" }]}>
              {currentRestaurant.openingHours}
            </Text>
          </View>

          <View style={{ margin: 30, alignItems: "center" }}>
            <Text style={[styles.productContent, { fontSize: 30 }]}>
              Contact:
            </Text>
            <Text style={[styles.productContent, { textAlign: "center" }]}>
              {currentRestaurant.contact}
            </Text>
          </View>

          <View style={styles.gradeView}>
            <Text style={[styles.productContent, { fontSize: 30 }]}>
              CURRENT GRADE:
            </Text>
            <Text
              style={[
                styles.productContent,
                { textAlign: "center", fontSize: 35, color: "orange" },
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
              id: currentRestaurant.id,
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
