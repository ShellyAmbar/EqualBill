import React from 'react';
import TextFactoryProps from './interfaces';
import Text from '@equalbill/components/controllers/text/text';
import TextError from './text-error/text-error';
import TextH1 from './text-h1/text-h1';
import TextH2 from './text-h2/text-h2';
import TextH3 from './text-h3/text-h3';
import TextH4 from './text-h4/text-h4';
import TextH5 from './text-h5/text-h5';
import TextH6 from './text-h6/text-h6';
import TextLabel from './text-label/text-label';
import TextBodyText1 from './text-body-text1/text-body-text1';
import TextBodyText2 from './text-body-text2/text-body-text2';
import TextMainTitle from './text-main-title/text-main-title';
import TextBodyTextSmall from './text-body-text-small/text-body-text-small';
import TextBodyText3 from './text-body-text3/text-body-text3';
import TextWarning from './text-warning/text-warning';
import TextBodyTextSmallHighlight from './text-body-text-small-highlight/text-body-text-small-highlight';

const TextFactory = ({ type, ...props }: TextFactoryProps) => {
  switch (type) {
    case 'error':
      return <TextError {...props} />;
    case 'warning':
      return <TextWarning {...props} />;
    case 'h1':
      return <TextH1 {...props} />;
    case 'h2':
      return <TextH2 {...props} />;
    case 'h3':
      return <TextH3 {...props} />;
    case 'h4':
      return <TextH4 {...props} />;
    case 'h5':
      return <TextH5 {...props} />;
    case 'h6':
      return <TextH6 {...props} />;
    case 'body-text1':
      return <TextBodyText1 {...props} />;
    case 'body-text-small':
      return <TextBodyTextSmall {...props} />;
    case 'body-text-small-highlight':
      return <TextBodyTextSmallHighlight {...props} />;
    case 'body-text2':
      return <TextBodyText2 {...props} />;
    case 'body-text3':
      return <TextBodyText3 {...props} />;

    case 'main-title':
      return <TextMainTitle {...props} />;
    case 'label':
      return <TextLabel {...props} />;
    default:
      return <Text {...props} />;
  }
};

export default TextFactory;
