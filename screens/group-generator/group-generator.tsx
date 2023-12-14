import React from 'react';
import { Box } from '@equalbill/components/controllers/box/box';
import Styles from './group-generator.styles';
import HorizontalGradiantProgressbar from '@equalbill/components/horizontal-gradiant-progressbar/horizontal-gradiant-progressbar';
import { GlobalColors } from '@equalbill/styles/global-colors';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import useGroupGenerator from './hooks/useGroupGenerator';
import GroupDetails from './group-details/group-details';
import GroupMedia from './group-media/group-media';
import GroupParticipents from './group-participents/group-participents';
import Back from '@equalbill/assets/images/direction-left.svg';

const GroupGenerator = props => {
  const { currentStep, setCurrentStep, steps } = useGroupGenerator();

  const getCurrentStepView = () => {
    return currentStep === 0 ? <GroupDetails /> : currentStep === 1 ? <GroupMedia /> : <GroupParticipents />;
  };
  return (
    <Box style={Styles.container}>
      <Spacer size={30} />
      <Box style={Styles.horizontal}>
        <Box
          onPress={() => {
            props.navigation.navigate('Home');
          }}
        >
          <Back width={24} height={24} />
        </Box>
        <TextFactory style={Styles.buttonText} type="h1">
          {'Create Group'}
        </TextFactory>
        <Box style={{ width: 24, height: 24 }} />
      </Box>

      <Spacer size={44} />
      <HorizontalGradiantProgressbar
        steps={steps}
        currentStep={currentStep}
        containerStyle={{ height: 10 }}
        progressValue={10}
        gradiantStyle={{ borderRadius: 50 }}
        colorPrimary={GlobalColors.Brand.primary}
        colorSecondary={GlobalColors.Brand.secondary}
      />
      <Spacer size={54} />
      {getCurrentStepView()}

      <Box style={Styles.horizontal_spaces}>
        {currentStep > 0 && (
          <Box
            style={[Styles.button, currentStep === 0 && { borderColor: GlobalColors.BgColors.Bg4 }]}
            onPress={() => {
              setCurrentStep(prev => {
                return prev > 0 ? prev - 1 : 0;
              });
            }}
          >
            <TextFactory type="h4" style={Styles.buttonText}>
              {'Back'}
            </TextFactory>
          </Box>
        )}
        <Spacer size={12} isVertical={false} />
        <Box
          style={Styles.button}
          onPress={() => {
            setCurrentStep(prev => {
              if (prev === steps - 1) {
                props.navigation.navigate('Home');
              }
              return prev < steps - 1 ? prev + 1 : steps - 1;
            });
          }}
        >
          <TextFactory type="h4" style={Styles.buttonText}>
            {'Next'}
          </TextFactory>
        </Box>
      </Box>
    </Box>
  );
};

export default GroupGenerator;
