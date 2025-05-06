import { Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { COLORS } from "../../constants/colors";

const LoginScreen = () => {
  return (
    <LinearGradient
      style={styles.root}
      colors={[COLORS.primary, COLORS.secondary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.upperContainer}>
        <Text>top</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text>bottom</Text>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
