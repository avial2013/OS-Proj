import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../assets/Style";

export default function GridTile(props) {
  return (
    <TouchableOpacity style={styles.gridTileContainer} onPress={props.onSelect}>
      <Text style={styles.HSText}>{props.name}</Text>
    </TouchableOpacity>
  );
}
