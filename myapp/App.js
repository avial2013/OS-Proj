import React, { useState } from "react";
import AppNavigator from "./router/AppNavigation";
import AppLoading from "expo-app-loading";

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
