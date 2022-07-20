import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../assets/Style";

export default function ProductGridTile(props) {
  return (
    <TouchableOpacity style={styles.deleteButton} onPress={props.removeItem}>
      <Text style={[styles.content, { fontSize: 15 }]}>remove from cart</Text>
    </TouchableOpacity>
  );
}
