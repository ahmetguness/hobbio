import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { GeneralNavigationProp } from "../../types/navigation_types/NavigationTypes";

const IntroScreen = () => {
  const navigation = useNavigation<GeneralNavigationProp>();

  return (
    <View style={styles.root}>
      <Button
        title="GO NEXT"
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </View>
  );
};

export default IntroScreen;
