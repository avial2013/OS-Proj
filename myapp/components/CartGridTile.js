import React from "react";
import { View, Text } from "react-native";
import styles from "../assets/Style";
import { ImageBackground } from "react-native";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

export default function CategoryGridTile(props) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={props.renderRightActions}>
        <View style={styles.gridComponent}>
          {/* <ImageBackground
            imageStyle={{ borderRadius: 25, opacity: 0.6 }}
            source={{ uri: props.imgUrl }}
            resizeMode="contain"
            style={styles.gridComponentBackground}
          >
            <View style={[styles.gridContainer]}>
              <Text style={[styles.content, { fontSize: 25 }]}>
                {props.title}
              </Text>
              <Text style={[styles.content, { fontSize: 25 }]}>
                price: {props.price}$ {"\n"}
                shipping price:{" "}
                {props.shippingPrice !== 0
                  ? props.shippingPrice + "$"
                  : "free shipping"}
              </Text>
              <Text style={[styles.content, { fontSize: 20 }]}>
                number of items: {props.numOfOrders}
              </Text>
            </View>
          </ImageBackground> */}
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
