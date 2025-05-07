import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  upperContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  upperText1: {
    fontSize: 36,
    fontWeight: "800",
    color: COLORS.white,
    marginBottom: 8,
  },
  upperText2: {
    fontSize: 18,
    color: COLORS.white,
    opacity: 0.9,
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    padding: 32,
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  inputContainer: {
    marginBottom: 20,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 4,
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
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    gap: 12,
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 4,
  },
});
