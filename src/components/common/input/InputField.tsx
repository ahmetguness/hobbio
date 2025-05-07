import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../../../constants/colors";

interface TextInputFieldProps {
  title: string;
  placeholder: string;
  isPassword?: boolean;
  value: string;
  onChangeText: (text: string) => void;
}

export const TextInputField: React.FC<TextInputFieldProps> = ({
  title,
  placeholder,
  isPassword = false,
  value,
  onChangeText,
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{title}</Text>
    <TextInput
      placeholder={placeholder}
      secureTextEntry={isPassword}
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: COLORS.inputBackground,
    color: COLORS.text,
  },
});
