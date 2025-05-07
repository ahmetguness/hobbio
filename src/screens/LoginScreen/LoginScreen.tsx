import React, { useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { COLORS } from "../../constants/colors";
import { TextInputField } from "../../components/common/input/InputField";
import PrimaryButton from "../../components/common/buttons/PrimaryButton";
import TextButton from "../../components/common/buttons/TextButton";
import Checkbox from "expo-checkbox";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../hooks/redux_toolkit/slices/UserSlice";
import { DUMMY_USER } from "../../data/dummy_data";
import { useNavigation } from "@react-navigation/native";
import { GeneralNavigationProp } from "../../types/navigation_types/NavigationTypes";

const LoginScreen = () => {
  const [toggleRegisterMode, setToggleRegisterMode] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const clearInputs = () => {
    setUserName("");
    setPassword("");
  };

  const dispatch = useDispatch();
  const navigation = useNavigation<GeneralNavigationProp>();

  const upperContainerText = toggleRegisterMode
    ? { title: "Welcome", subtitle: "Please Register" }
    : { title: "Hello", subtitle: "Please Login" };

  const handleLogin = () => {
    const user = DUMMY_USER.find((user) => user.userName === userName);
    if (user && user.userPassword === password) {
      dispatch(
        setUserInfo({
          userId: user.userId,
          userName: user.userName,
          userPassword: user.userPassword,
        })
      );
      navigation.navigate("HomeScreen");
      clearInputs();
      console.log("doğru");
    } else {
      Alert.alert("Wrong");
      clearInputs();
    }
  };

  return (
    <LinearGradient
      style={styles.root}
      colors={[COLORS.primary, COLORS.secondary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.upperContainer}>
        <Text style={styles.upperText1}>{upperContainerText.title}</Text>
        <Text style={styles.upperText2}>{upperContainerText.subtitle}</Text>
      </View>

      <View style={styles.bottomContainer}>
        {toggleRegisterMode ? (
          <>
            <Button title="asd" onPress={() => setToggleRegisterMode(false)} />
          </>
        ) : (
          <>
            <TextInputField
              title="User Name"
              placeholder="Enter your user name"
              value={userName}
              onChangeText={setUserName}
            />
            <TextInputField
              title="Password"
              placeholder="Enter your password"
              isPassword
              value={password}
              onChangeText={setPassword}
            />
            <View style={styles.checkboxRow}>
              <Checkbox
                value={isChecked}
                onValueChange={setIsChecked}
                color={COLORS.primary}
                style={{ marginRight: 8 }}
              />
              <Text style={{ fontSize: 14, color: COLORS.text }}>
                Keep Logged In
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <PrimaryButton title="Log In" onPress={() => handleLogin()} />

              <TextButton
                title="Dont u have an account? Lets Register"
                onPress={() => setToggleRegisterMode(true)}
              />
              <TextButton
                title="Forgot Your Password?"
                onPress={() => setToggleRegisterMode(true)}
              />
            </View>
          </>
        )}
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
