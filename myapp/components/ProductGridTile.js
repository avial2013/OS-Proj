import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../assets/Style";
import { ImageBackground } from "react-native";

export default function ProductGridTile(props) {
  return (
    <TouchableOpacity
      style={styles.gridComponent}
      onPress={props.navigateToRestaurantDetails}
    >
      <ImageBackground
        imageStyle={{ borderRadius: 25, opacity: 0.6 }}
        source={{ uri: props.img }}
        resizeMode="contain"
        style={styles.gridComponentBackground}
      >
        <View style={[styles.gridContainer]}>
          <Text style={[styles.content, { fontSize: 28 }]}>{props.name}</Text>
            {/*toFixed - to add .00, and do show more than 2*/}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
