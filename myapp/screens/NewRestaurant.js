import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "../assets/Style";
import { Context } from "../App";
import {postRestaurant} from "../components/PostFunc";
import { getRestaurants } from "../data/DBdata";

export default function NewRestaurant({ navigation }) {
  const { CalcPoints, SumGrade, CheckFinalGrade, restArray, setRestArray } =
    useContext(Context);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [openHours, setOpenHours] = useState("");
  const [contactDetails, setContactDetails] = useState("");
  const [image, setImage] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.content, { fontSize: 50 }]}>New Restaurant</Text>

      <TextInput
        style={styles.userInput}
        placeholder="Name"
        keyboardType="default"
        placeholderTextColor={"#c0c0c0"}
        onChangeText={(text) => {
          setName(text);
        }}
      />

      <TextInput
        style={styles.userInput}
        placeholder="Address"
        keyboardType="default"
        placeholderTextColor={"#c0c0c0"}
        onChangeText={(text) => {
          setAddress(text);
        }}
      />

      <TextInput
        style={styles.userInput}
        placeholder="Opening Hours"
        keyboardType="default"
        placeholderTextColor={"#c0c0c0"}
        onChangeText={(text) => {
          setOpenHours(text);
        }}
      />
      <TextInput
        style={styles.userInput}
        placeholder="Contact Details"
        keyboardType="default"
        placeholderTextColor={"#c0c0c0"}
        onChangeText={(text) => {
          setContactDetails(text);
        }}
      />

      <TouchableOpacity
        style={styles.BtnAddImage}
        onPress={() => {
          pickImage();
        }}
      >
        <Text style={{ textAlign: "center" }}> Pick an image </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setName("");
          setAddress("");
          setOpenHours("");
          setContactDetails("");
          setImage("");

          postRestaurant(name, address, openHours, contactDetails, image)
            .then((item) => {
              let temp = restArray;
              temp.push(item);
              temp.map((item, index) => {
                item.id = index++;
              });
              setRestArray(temp);
            })
            .then(() => {
              getRestaurants();
              navigation.navigate("HomeScreen");
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <Text style={styles.Btn}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
