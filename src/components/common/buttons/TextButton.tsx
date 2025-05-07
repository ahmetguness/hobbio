import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface TextButtonProps {
  title: string;
  onPress: () => void;
}

const TextButton: React.FC<TextButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
  },
});
