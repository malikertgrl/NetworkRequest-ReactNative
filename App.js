import React from "react";
import {View, StatusBar} from "react-native";
import Header from "./src/components/Header";
import Liste from "./src/components/Liste";


const App = () => {
  return (
    
    <View style= {{flex:1}}>
     <StatusBar
     backgroundColor="#5d99c6"
     barStyle="light-content"  
    />
      <Header title = {"HEADER"} />
      <Liste />
      
    </View>
  );
};


export default App;
