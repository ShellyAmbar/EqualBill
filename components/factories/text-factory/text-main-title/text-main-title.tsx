import Text from '@equalbill/components/controllers/text/text';
import React from 'react';
import Styles from './text-main-title.styles';

const TextMainTitle = ({ ...props }) => {
  return <Text {...props} style={[Styles.TextMainTitle, props.style]} />;
};

export default TextMainTitle;
