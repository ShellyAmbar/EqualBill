import {StyleSheet} from "react-native";
import {CreateStylesProps} from "./interfaces";

const createStyles = (props: CreateStylesProps) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      justifyContent: "center",
      overflow: "hidden",
      borderTopRightRadius: 12,
      borderTopLeftRadius: 12,
      paddingBottom: 5,
      paddingHorizontal: 0,
    },

    header: {
      zIndex: 1,
    },
    body: {
      zIndex: 0,
    },
  });
};
export default createStyles;
