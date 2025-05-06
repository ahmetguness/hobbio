import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  upperContainer: {},
  bottomContainer: {
    height: "70%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: COLORS.surface,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
  },
});
