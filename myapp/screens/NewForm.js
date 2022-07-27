import React, { useState, useContext, useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Context } from "../App";
import styles from "../assets/Style";
import { getQuestions } from "../data/DBdata";
import { putRestaurantsGrade } from "../components/PostFunc";

export default function NewForm({ route, navigation }) {
  const { CalcPoints, SumGrade, CheckFinalGrade } = useContext(Context);
  const [questList, setQuestList] = useState([]);
  let listOfText = [];
  const [gradeList, setGradeList] = useState([]);

  const currentRestName = route.params.name;

  useEffect(() => {
    getQuestions().then((item) => {
      setQuestList(item);
    });
  }, []);

  const makeLists = () => {
    if (questList != []) {
      Object.values(questList).forEach(function (prop) {
        listOfText.push(prop.questionStr);
      });
    }
  };
  makeLists();

  let [q, setQ] = useState(-1);
  let [g, setGrade] = useState("");
  let [q1, setQ1] = useState("");
  let [q2, setQ2] = useState("");
  let [q3, setQ3] = useState("");
  let [q4, setQ4] = useState("");
  let [q5, setQ5] = useState("");
  let [q6, setQ6] = useState("");
  let [q7, setQ7] = useState("");
  let [q8, setQ8] = useState("");
  let [q9, setQ9] = useState("");
  let [q10, setQ10] = useState("");
  let [q11, setQ11] = useState("");
  let [q12, setQ12] = useState("");
  let [q13, setQ13] = useState("");
  let [q14, setQ14] = useState("");
  let [q15, setQ15] = useState("");

  let grades = () => {
    let sum = 0;
    if (gradeList != []) {
      sum = SumGrade(gradeList);
      setQ(sum);
      console.log(`sum: ${sum}`);
      let finalG = CheckFinalGrade(sum);

      setGrade(finalG);
      console.log(`finalG: ${finalG}`);
      return finalG;
    }
  };


  return (
    <View style={styles.mainBackground}>
      <Text style={[styles.content, { fontSize: 50 }]}>New Form</Text>
      <SafeAreaView style={styles.mainBackground}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginVertical: 25,
          }}
          style={styles.scrollView}
        >
          <Text>{listOfText[0]}</Text>
          <Text style={[styles.textInput]}></Text>
          <TextInput
            onBlur={() => {
              setGradeList([
                ...gradeList,
                CalcPoints(questList[0].category.title, q1),
              ]);
              console.log(`Post: ${gradeList}`);
            }}
            onChangeText={(text) => [
              setQ1(text),
              console.log(`Prev: ${gradeList}`),
            ]}
            style={[styles.input]}
            maxLength={1}
            keyboardType="numeric"
            placeholder="Enter level number (between 1 to 5)..."
            placeholderTextColor="grey"
          />

          <Text>{listOfText[1]}</Text>
          <TextInput
            onBlur={() => {
              setGradeList([
                ...gradeList,
                CalcPoints(questList[1].category.title, q2),
              ]);
              console.log(`Post: ${gradeList}`);
            }}
            onChangeText={(text) => [
              setQ2(text),
              console.log(`Prev: ${gradeList}`),
            ]}
            // onEndEditing={test}
            style={[styles.input]}
            maxLength={1}
            keyboardType="numeric"
            placeholder="Enter level number (between 1 to 5)..."
            placeholderTextColor="grey"
          />

          <Text>{listOfText[2]}</Text>
          <TextInput
            onBlur={() => {
              setGradeList([
                ...gradeList,
                CalcPoints(questList[2].category.title, q3),
              ]);
              console.log(`Post: ${gradeList}`);
            }}
            onChangeText={(text) => [
              setQ3(text),
              console.log(`Prev: ${gradeList}`),
            ]}
            style={[styles.input]}
            maxLength={1}
            keyboardType="numeric"
            placeholder="Enter level number (between 1 to 5)..."
            placeholderTextColor="grey"
          />

          <Text>{listOfText[3]}</Text>
          <TextInput
            onBlur={() => {
              setGradeList([
                ...gradeList,
                CalcPoints(questList[3].category.title, q4),
              ]);
              console.log(`Post: ${gradeList}`);
            }}
            onChangeText={(text) => [
              setQ4(text),
              console.log(`Prev: ${gradeList}`),
            ]}
            style={[styles.input]}
            maxLength={1}
            keyboardType="numeric"
            placeholder="Enter level number (between 1 to 5)..."
            placeholderTextColor="grey"
          />

          <Text>{listOfText[4]}</Text>
          <TextInput
            onBlur={() => {
              setGradeList([
                ...gradeList,
                CalcPoints(questList[4].category.title, q5),
              ]);
              console.log(`Post: ${gradeList}`);
            }}
            onChangeText={(text) => [
              setQ5(text),
              console.log(`Prev: ${gradeList}`),
            ]}
            style={[styles.input]}
            maxLength={1}
            keyboardType="numeric"
            placeholder="Enter level number (between 1 to 5)..."
            placeholderTextColor="grey"
          />

          <Text>{listOfText[5]}</Text>
          <TextInput
            onBlur={() => {
              setGradeList([
                ...gradeList,
                CalcPoints(questList[5].category.title, q6),
              ]);
              console.log(`Post: ${gradeList}`);
            }}
            onChangeText={(text) => [
              setQ6(text),
              console.log(`Prev: ${gradeList}`),
            ]}
            style={[styles.input]}
            maxLength={1}
            keyboardType="numeric"
            placeholder="Enter level number (between 1 to 5)..."
            placeholderTextColor="grey"
          />

          <Text>{listOfText[6]}</Text>
          <TextInput
            onBlur={() => {
              setGradeList([
                ...gradeList,
                CalcPoints(questList[6].category.title, q7),
              ]);
              console.log(`Post: ${gradeList}`);
            }}
            onChangeText={(text) => [
              setQ7(text),
              console.log(`Prev: ${gradeList}`),
            ]}
            style={[styles.input]}
            maxLength={1}
            keyboardType="numeric"
            placeholder="Enter level number (between 1 to 5)..."
            placeholderTextColor="grey"
          />

          <Text>{listOfText[7]}</Text>
          <TextInput
            onBlur={() => {
              setGradeList([
                ...gradeList,
                CalcPoints(questList[7].category.title, q8),
              ]);
              console.log(`Post: ${gradeList}`);
            }}
            onChangeText={(text) => [
              setQ8(text),
              console.log(`Prev: ${gradeList}`),
            ]}
            style={[styles.input]}
            maxLength={1}
            keyboardType="numeric"
            placeholder="Enter level number (between 1 to 5)..."
            placeholderTextColor="grey"
          />

          <Text>{listOfText[8]}</Text>
          <TextInput
            onBlur={() => {
              setGradeList([
                ...gradeList,
                CalcPoints(questList[8].category.title, q9),
              ]);
              console.log(`Post: ${gradeList}`);
            }}
            onChangeText={(text) => [
              setQ9(text),
              console.log(`Prev: ${gradeList}`),
            ]}
            style={[styles.input]}
            maxLength={1}
            keyboardType="numeric"
            placeholder="Enter level number (between 1 to 5)..."
            placeholderTextColor="grey"
          />

          <Text>{listOfText[9]}</Text>
          <TextInput
            onBlur={() => {
              setGradeList([
                ...gradeList,
                CalcPoints(questList[9].category.title, q10),
              ]);
              console.log(`Post: ${gradeList}`);
            }}
            onChangeText={(text) => [
              setQ10(text),
              console.log(`Prev: ${gradeList}`),
            ]}
            style={[styles.input]}
            maxLength={1}
            keyboardType="numeric"
            placeholder="Enter level number (between 1 to 5)..."
            placeholderTextColor="grey"
          />

          <Text>{listOfText[10]}</Text>
          <TextInput
            onBlur={() => {
              setGradeList([
                ...gradeList,
                CalcPoints(questList[10].category.title, q11),
              ]);
              console.log(`Post: ${gradeList}`);
            }}
            onChangeText={(text) => [
              setQ11(text),
              console.log(`Prev: ${gradeList}`),
            ]}
            style={[styles.input]}
            maxLength={1}
            keyboardType="numeric"
            placeholder="Enter level number (between 1 to 5)..."
            placeholderTextColor="grey"
          />

          <Text>{listOfText[11]}</Text>
          <TextInput
            onBlur={() => {
              setGradeList([
                ...gradeList,
                CalcPoints(questList[11].category.title, q12),
              ]);
              console.log(`Post: ${gradeList}`);
            }}
            onChangeText={(text) => [
              setQ12(text),
              console.log(`Prev: ${gradeList}`),
            ]}
            style={[styles.input]}
            maxLength={1}
            keyboardType="numeric"
            placeholder="Enter level number (between 1 to 5)..."
            placeholderTextColor="grey"
          />

          <Text>{listOfText[12]}</Text>
          <TextInput
            onBlur={() => {
              setGradeList([
                ...gradeList,
                CalcPoints(questList[12].category.title, q13),
              ]);
              console.log(`Post: ${gradeList}`);
            }}
            onChangeText={(text) => [
              setQ13(text),
              console.log(`Prev: ${gradeList}`),
            ]}
            style={[styles.input]}
            maxLength={1}
            keyboardType="numeric"
            placeholder="Enter level number (between 1 to 5)..."
            placeholderTextColor="grey"
          />

          <Text>{listOfText[13]}</Text>
          <TextInput
            onBlur={() => {
              setGradeList([
                ...gradeList,
                CalcPoints(questList[13].category.title, q14),
              ]);
              console.log(`Post: ${gradeList}`);
            }}
            onChangeText={(text) => [
              setQ14(text),
              console.log(`Prev: ${gradeList}`),
            ]}
            style={[styles.input]}
            maxLength={1}
            keyboardType="numeric"
            placeholder="Enter level number (between 1 to 5)..."
            placeholderTextColor="grey"
          />

          <Text>{listOfText[14]}</Text>
          <TextInput
            onBlur={() => {
              setGradeList([
                ...gradeList,
                CalcPoints(questList[14].category.title, q15),
              ]);
              console.log(`Post: ${gradeList}`);
            }}
            onChangeText={(text) => [
              setQ15(text),
              console.log(`Prev: ${gradeList}`),
            ]}
            style={[styles.input]}
            maxLength={1}
            keyboardType="numeric"
            placeholder="Enter level number (between 1 to 5)..."
            placeholderTextColor="grey"
          />
          <Text style={[styles.content, q == -1 ? { display: "none" } : ""]}>
            Final Grade: {g}
          </Text>

          <TouchableOpacity
            style={[styles.navigateButton, { margin: 20 }]}
            onPress={
              () => {
                let gradeToUpdate = grades();
                putRestaurantsGrade(gradeToUpdate, currentRestName);
              }
            }
          >
            <Text style={styles.buttonText}>submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
