import React from 'react';
import Styles from './profile-screen.styles';
import { Box } from '@equalbill/components/controllers/box/box';
import { Image } from 'react-native';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalColors } from '@equalbill/styles/global-colors';
import { height, width } from '@equalbill/styles/styles';
import Edit from '@equalbill/assets/images/edit.svg';
import { logout } from '@equalbill/api/auth/auth.api';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const logoutUser = async () => {
    await logout();
    navigation.navigate('Auth');
  };
  return (
    <Box style={Styles.container}>
      <LinearGradient
        colors={[GlobalColors.BgColors.Bg8, GlobalColors.Brand.primary]}
        style={{ width: width, height: height, position: 'absolute' }}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0 }}
      />
      <Box showsVerticalScrollIndicator={false} contentContainerStyle={Styles.content} scroll style={Styles.scroll}>
        <Spacer size={60} />

        <Box style={[Styles.shadow, Styles.image]}>
          <Image
            style={Styles.image}
            source={{ uri: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg' }}
          />
          <Box
            style={{
              position: 'absolute',
              bottom: 5,
              end: 5,
              borderRadius: 100,
              backgroundColor: GlobalColors.BgColors.Bg3,
              padding: 10,
              borderColor: GlobalColors.BgColors.Bg5,
              borderWidth: 2,
              zIndex: 2,
            }}
            onPress={() => {}}
          >
            <Edit width={24} height={24} />
          </Box>
        </Box>

        <Spacer size={24} />
        <TextFactory style={Styles.title} type="h3">
          {'Shelly Ambar'}
        </TextFactory>
        <Spacer size={30} />

        <Box style={Styles.field}>
          <TextFactory type="body-text-small" style={Styles.field_title}>
            {'Name'}
          </TextFactory>
          <TextFactory type="h4" style={Styles.field_subtitle}>
            {'Shelly ambar'}
          </TextFactory>
        </Box>

        <Spacer size={16} />

        <Box style={Styles.field}>
          <TextFactory type="body-text-small" style={Styles.field_title}>
            {'Name'}
          </TextFactory>
          <TextFactory type="h4" style={Styles.field_subtitle}>
            {'Shelly ambar'}
          </TextFactory>
        </Box>

        <Spacer size={16} />

        <Box style={Styles.field}>
          <TextFactory type="body-text-small" style={Styles.field_title}>
            {'Name'}
          </TextFactory>
          <TextFactory type="h4" style={Styles.field_subtitle}>
            {'Shelly ambar'}
          </TextFactory>
        </Box>

        <Spacer size={16} />

        <Box style={Styles.field}>
          <TextFactory type="body-text-small" style={Styles.field_title}>
            {'Name'}
          </TextFactory>
          <TextFactory type="h4" style={Styles.field_subtitle}>
            {'Shelly ambar'}
          </TextFactory>
        </Box>
        <Spacer size={16} />
        <Box
          onPress={() => {
            logoutUser();
          }}
          style={Styles.centered}
        >
          <TextFactory type="h5" style={Styles.field_subtitle}>
            {'Log out'}
          </TextFactory>
        </Box>

        <Spacer size={16} />
      </Box>
    </Box>
  );
};
export default ProfileScreen;
