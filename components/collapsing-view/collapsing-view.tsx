import {Animated, View} from "react-native";
import React, {useEffect, useState} from "react";
import {CollapsingViewProps} from "./interfaces";
import useCollapsingView from "./hooks/useCollapsingView";
import createStyles from "./collapsing-view.styles";

const CollapsingView = ({
  header,
  body,
  isCollapsed,
  ...props
}: CollapsingViewProps) => {
  const {animatSlideUp, animatSlideDown, slideAnim} = useCollapsingView();
  const [isShowBody, setIsShowBody] = useState(false);

  const [bodyHeight, setBodyHeight] = useState(0);
  const Styles = createStyles({isCollapsed});

  useEffect(() => {
    if (!isCollapsed) {
      animatSlideUp(bodyHeight);
      setTimeout(() => {
        setIsShowBody(false);
      }, 500);
    } else {
      setIsShowBody(true);
      animatSlideDown();
    }
  }, [isCollapsed]);

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>{header}</View>

      {isShowBody && (
        <Animated.View
          style={{
            transform: [{translateY: slideAnim}],
          }}
          onLayout={(event) => {
            setBodyHeight(event.nativeEvent.layout.height);
          }}
        >
          <View style={Styles.body}>{body}</View>
        </Animated.View>
      )}
    </View>
  );
};

export default CollapsingView;
