import {Animated} from "react-native";
import {useRef} from "react";

const useCollapsingView = () => {
  const slideAnim = useRef(new Animated.Value(0)).current;

  const animatSlideUp = (height) => {
    let finalheight = -height;

    Animated.timing(slideAnim, {
      toValue: finalheight,
      duration: 500,
      useNativeDriver: true,
    })
    .start();
  };

  const animatSlideDown = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    })
    .start();
  };
  return {
    animatSlideUp,

    animatSlideDown,
    slideAnim,
  };
};

export default useCollapsingView;
