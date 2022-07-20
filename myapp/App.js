import React, { useState } from "react";
import AppNavigator from "./router/AppNavigation";
import AppLoading from "expo-app-loading";
import { useFonts, Neucha_400Regular } from "@expo-google-fonts/neucha";

export const Context = React.createContext();

export default function App() {
  
  const [restArray, setRestArray] = useState([]);
  
  const CalcPoints = (cat, level) => {
    let sum = 0;
    if (cat == "A") {
      sum = 2;
      if (level == 1) {
        sum += 7;
      }
      if (level == 2) {
        sum += 9;
      }
      if (level == 3) {
        sum += 11;
      }
      if (level == 4) {
        sum += 13;
      }
      if (level == 5) {
        sum += 15;
      }
    }

    if (cat == "B") {
      sum = 1;
      if (level == 1) {
        sum += 4;
      }
      if (level == 2) {
        sum += 6;
      }
      if (level == 3) {
        sum += 8;
      }
      if (level == 4) {
        sum += 10;
      }
      if (level == 5) {
        sum += 12;
      }
    }
    if (cat == "C") {
      sum = 0;
      if (level == 1) {
        sum += 2;
      }
      if (level == 2) {
        sum += 4;
      }
      if (level == 3) {
        sum += 6;
      }
      if (level == 4) {
        sum += 8;
      }
      if (level == 5) {
        sum += 10;
      }
    }
    console.log(sum);
    return sum;
  };

  // const SumGrade = (q) => {
  //   let points = 0;
  //   for(let i = 0; i < q.length; i++){
  //       if(q[i].IsTrue){
  //           points += CalcPoints(q[i].Category, q[i].Level);
  //       }
  //   }
  //   return points;
  // }

  const SumGrade = (arr) => {
    let points = 0;
    for (let i = 0; i < arr.length; i++) {
      points = points + arr[i];
    }
    console.log(points);
    return points;
  };

  const CheckFinalGrade = (points) => {
    if (points < 0) return "Invalid amount of points";
    if (points >= 0 && points <= 17) return "A";
    if (points > 17 && points <= 25) return "B";
    if (points > 25 && points <= 34) return "C";
    console.log("Letter Grade");
    return "D";
  };

  // load the fonts
  let [fontsLoaded, err] = useFonts({
    Neucha_400Regular,
    "Neucha-Regular": require("./assets/fonts/Neucha/Neucha-Regular.ttf"),
  });

  // if the font is not loaded, then <AppLoading> will be displayed
  if (!fontsLoaded) return <AppLoading />;
  // when the font is loaded, the app will be display
  else
    return (
      <Context.Provider
        value={{
          CalcPoints,
          SumGrade,
          CheckFinalGrade,
          restArray,
          setRestArray,
        }}
      >
        <AppNavigator />
      </Context.Provider>
    );
}
