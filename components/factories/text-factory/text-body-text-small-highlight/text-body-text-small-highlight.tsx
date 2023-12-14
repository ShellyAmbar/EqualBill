import React from 'react';
import { Text } from 'react-native';
import Styles from './text-body-text-small-highlight.styles';

const TextBodyTextSmallHighlight = ({ ...props }) => {
  return <Text {...props} style={[Styles.BodyTextSmallHighlight, props.style]} />;
};

export default TextBodyTextSmallHighlight;
