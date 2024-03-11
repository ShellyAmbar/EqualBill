import * as React from 'react';

import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';

import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { app, auth } from '@equalbill/firebaseConfig';
import { Box } from '@equalbill/components/controllers/box/box';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import ReactiveTextInput from 'rn-reactive-text-input';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import { GlobalColors } from '@equalbill/styles/global-colors';
import Button from '@equalbill/components/controllers/button/button';
import { useRef, useState } from 'react';
import { BlurView } from 'expo-blur';
import Styles from './auth-screen.styles';

import { LinearGradient } from 'expo-linear-gradient';
import useAuthScreen from './hooks/useAuthScreen';
import { TouchableOpacity } from 'react-native';
import Left from '@equalbill/assets/images/direction-left-white.svg';
const AuthScreen = ({ route, navigation }) => {
  const [isLogin, setIsLogin] = useState(route?.params?.isLoggin ? route?.params?.isLoggin : false);
  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState();
  const [verificationId, setVerificationId] = useState();
  const [verificationCode, setVerificationCode] = useState();

  const firebaseConfig = app ? app.options : undefined;
  const [message, showMessage] = useState();
  const [userName, setUserName] = useState('');
  const attemptInvisibleVerification = false;
  const {} = useAuthScreen();
  return (
    <Box style={{ flex: 1 }}>
      <Box style={Styles.background}>
        <LinearGradient
          colors={[GlobalColors.Brand.fifth, GlobalColors.Brand.thierd]}
          style={Styles.background}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      </Box>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', left: 16, top: 30 }}>
        <Left />
      </TouchableOpacity>

      <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier} firebaseConfig={app.options} attemptInvisibleVerification={false} />
      <BlurView intensity={20} style={Styles.blurContainer}>
        <Box>
          {
            <TextFactory style={Styles.title} type="h1">
              {isLogin ? 'Login' : 'Signup'}
            </TextFactory>
          }

          <Spacer size={36} />

          {!isLogin && (
            <>
              <ReactiveTextInput
                placeholderTextColor={GlobalColors.TextColors.thierd}
                textInputStyle={Styles.textInputStyle}
                placeholder="Enter your full name"
                label="Your full name"
                lableStyle={Styles.lableStyle}
                defaultValue={''}
                textContentType="name"
                onEndEditing={e => {
                  setUserName(e.nativeEvent.text);
                }}
                autoComplete="tel"
                keyboardType="email-address"
              />

              <Spacer size={16} />
            </>
          )}
          <ReactiveTextInput
            placeholderTextColor={GlobalColors.TextColors.thierd}
            textInputStyle={Styles.textInputStyle}
            placeholder="Enter your phone number"
            label="Phone number"
            lableStyle={Styles.lableStyle}
            defaultValue={''}
            textContentType="telephoneNumber"
            onEndEditing={e => {
              setPhoneNumber(e.nativeEvent.text);
            }}
            autoComplete="tel"
            keyboardType="phone-pad"
          />
          <Spacer size={16} />

          <Button
            buttonStyle={Styles.buttonStyle}
            lableStyle={{ color: GlobalColors.Brand.primary }}
            label="Send Verification Code"
            disabled={!phoneNumber}
            onPress={async () => {
              try {
                const phoneProvider = new PhoneAuthProvider(auth);
                const verificationId = await phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current);
                setVerificationId(verificationId);
                showMessage({
                  text: 'Verification code has been sent to your phone.',
                });
              } catch (err) {
                showMessage({ text: `Error: ${err.message}`, color: 'red' });
              }
            }}
          />
          <Spacer size={16} />
          <ReactiveTextInput
            placeholderTextColor={GlobalColors.TextColors.thierd}
            textInputStyle={Styles.textInputStyle}
            label="Verification code"
            lableStyle={Styles.lableStyle}
            placeholder={'Enter your verification code'}
            textContentType="telephoneNumber"
            onEndEditing={e => {
              setVerificationCode(e.nativeEvent.text);
            }}
            autoComplete="tel"
            keyboardType="phone-pad"
            editable={!!verificationId}
          />
          <Spacer size={16} />

          <Button
            buttonStyle={Styles.buttonStyle}
            lableStyle={{ color: GlobalColors.Brand.primary }}
            label="Confirm Verification Code"
            disabled={!verificationId}
            onPress={async () => {
              try {
                const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
                await signInWithCredential(auth, credential);
                showMessage({ text: 'Phone authentication successful 👍' });
              } catch (err) {
                showMessage({ text: `Error: ${err.message}`, color: 'red' });
              }
            }}
          />
        </Box>
        <Spacer size={50} />
        <Button
          buttonStyle={Styles.buttonStyle}
          lableStyle={{ color: GlobalColors.Brand.primary }}
          label="Continue"
          disabled={!verificationId}
          onPress={async () => {}}
        />
      </BlurView>
      {/* {message ? (
        <TouchableOpacity
          style={[StyleSheet.absoluteFill, { backgroundColor: 0xffffffee, justifyContent: 'center' }]}
          onPress={() => showMessage(undefined)}
        >
          <Text
            style={{
              color: message.color || 'blue',
              fontSize: 17,
              textAlign: 'center',
              margin: 20,
            }}
          >
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : undefined} */}
      {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
    </Box>
  );
};

export default AuthScreen;
