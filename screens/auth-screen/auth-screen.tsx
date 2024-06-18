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

import Styles from './auth-screen.styles';

import { LinearGradient } from 'expo-linear-gradient';
import useAuthScreen from './hooks/useAuthScreen';
import { Text, TouchableOpacity } from 'react-native';
import Left from '@equalbill/assets/images/direction-left-white.svg';
import CountryCodePicker from 'rn-country-code-picker-modal';
import ConfirmOtp from './steps/confirm-otp/confirm-otp';
import SendOtp from './steps/send-otp/send-otp';
import UserDetailes from './steps/user-detailes/user-detailes';

const AuthScreen = ({ route, navigation }) => {
  const [isLogin, setIsLogin] = useState(route?.params?.isLoggin ? route?.params?.isLoggin : false);
  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const firebaseConfig = app ? app.options : undefined;
  const [message, showMessage] = useState('');
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
      <Box style={Styles.blurContainer}>
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
                onDebounce={text => {
                  setUserName(text);
                }}
                autoComplete="tel"
                keyboardType="email-address"
              />

              <Spacer size={16} />
            </>
          )}
          <Box style={Styles.horizontal}>
            <CountryCodePicker
              onPickedCode={code => {
                setPhoneNumber(code);
              }}
            />
            <Spacer size={16} isVertical={false} />
            <ReactiveTextInput
              placeholderTextColor={GlobalColors.TextColors.thierd}
              textInputStyle={Styles.textInputStyle}
              placeholder="Enter your phone number"
              label=""
              lableStyle={Styles.lableStyle}
              defaultValue={''}
              value={phoneNumber}
              onChangeText={t => setPhoneNumber(t)}
              textContentType="telephoneNumber"
              onDebounce={text => {
                setPhoneNumber(text);
              }}
              autoComplete="tel"
              keyboardType="phone-pad"
            />
          </Box>

          <Spacer size={16} />

          <Button
            buttonStyle={Styles.buttonStyle}
            lableStyle={{ color: GlobalColors.Brand.primary }}
            label="Send a Verification Code"
            disabled={!phoneNumber}
            onPress={async () => {
              try {
                const phoneProvider = new PhoneAuthProvider(auth);
                const verificationId = await phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current);
                setVerificationId(verificationId?.toString());
                showMessage('Verification code has been sent to your phone.');
                console.log('Verification code has been sent to your phone.');
              } catch (err) {
                showMessage(`Error: ${err.message}`);
                console.log(`Error: ${err.message}`);
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
            onDebounce={text => {
              setVerificationCode(text);
            }}
            autoComplete="tel"
            keyboardType="phone-pad"
            editable={verificationId?.length > 0}
          />
          <Spacer size={16} />

          <Button
            buttonStyle={Styles.buttonStyle}
            lableStyle={{ color: GlobalColors.Brand.primary }}
            label="Confirm Verification Code"
            disabled={!verificationId || verificationCode?.length === 0}
            onPress={async () => {
              try {
                const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
                await signInWithCredential(auth, credential);
                setIsAuthenticated(true);
                console.log('Phone authentication successful 👍');
              } catch (err) {
                console.log(`Error: ${err.message}`);
                setIsAuthenticated(false);
              }
            }}
          />
        </Box>
        <Spacer size={50} />
        <Box style={Styles.centerHorizontal}>
          <Button
            buttonStyle={{ ...Styles.buttonStyle, flex: 1 }}
            lableStyle={{ color: GlobalColors.Brand.primary, width: '100%' }}
            label="Back"
            disabled={!verificationId || !isAuthenticated}
            onPress={async () => {}}
          />
          <Spacer size={10} isVertical={false} />
          <Button
            buttonStyle={{ ...Styles.buttonStyle, flex: 1 }}
            lableStyle={{ color: GlobalColors.Brand.primary, flex: 1 }}
            label="Next"
            disabled={!verificationId || !isAuthenticated}
            onPress={async () => {}}
          />
        </Box>
      </Box>

      {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
    </Box>
  );
};

export default AuthScreen;
