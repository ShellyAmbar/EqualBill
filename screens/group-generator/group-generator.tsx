import React, { useRef } from 'react';
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
import { StepType } from './hooks/interfaces';
import GroupCompleteView from './group-complete-view/group-complete-view';
import UserStore from '@equalbill/stores/user/user-store';

const GroupGenerator = ({ route, navigation }) => {
  const groupToUpdate = route.params?.groupToUpdate;

  const { currentStep, setCurrentStep, steps, group, setGroup, isUpdate } = useGroupGenerator({ groupToUpdate });

  const getCurrentStepView = () => {
    return currentStep === StepType.DATA ? (
      <GroupDetails
        data={{ name: group.name, description: group.description }}
        onDataChanged={data => {
          console.log(data);

          const updateGroup = { ...group, name: data.name ?? '', description: data?.description ?? '' };

          setGroup(updateGroup);
        }}
      />
    ) : currentStep === StepType.MEDIA ? (
      <GroupMedia
        imageUri={group.url}
        onImageUriChanged={imageUri => {
          const updateGroup = { ...group, url: imageUri };
          setGroup(updateGroup);
        }}
      />
    ) : currentStep === StepType.PARTICIPENTS ? (
      <GroupParticipents
        participents={group.users}
        onParticipentsChanged={contacts => {
          const updateGroup = { ...group, users: contacts };
          setGroup(updateGroup);
        }}
      />
    ) : currentStep === StepType.COMPLETE ? (
      <GroupCompleteView group={group} />
    ) : (
      <></>
    );
  };

  const saveGroup = () => {
    // TODO => update group on server

    //update group on store
    if (UserStore.userGroups.find(group => group.id === group.id)) {
      const index = UserStore.userGroups.findIndex(group => group.id === group.id);
      UserStore.userGroups[index] = group;
      UserStore.setUserGroups([...UserStore.userGroups]);
    } else {
      UserStore.setUserGroups([...UserStore.userGroups, group]);
    }

    // returning updated group
    route.params?.onUpdate(group);
  };
  return (
    <Box style={Styles.container}>
      <Spacer size={30} />
      <Box style={Styles.horizontal}>
        <Box
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Back width={24} height={24} />
        </Box>
        <TextFactory style={Styles.buttonText} type="h1">
          {isUpdate ? 'Update Group' : 'Create Group'}
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
            if (currentStep === StepType.COMPLETE) {
              saveGroup();
              navigation.goBack();
            }
            setCurrentStep(prev => {
              return prev < steps - 1 ? prev + 1 : prev;
            });
          }}
        >
          <TextFactory type="h4" style={Styles.buttonText}>
            {currentStep === StepType.COMPLETE ? (isUpdate ? 'Update' : 'Create') : 'Next'}
          </TextFactory>
        </Box>
      </Box>
    </Box>
  );
};

export default GroupGenerator;
