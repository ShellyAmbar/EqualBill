import * as React from 'react';

import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import { initializeApp, getApp } from 'firebase/app';
import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { app, auth } from '@equalbill/firebaseConfig';
import { Box } from '@equalbill/components/controllers/box/box';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import ReactiveTextInput from 'rn-reactive-text-input';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import { GlobalColors } from '@equalbill/styles/global-colors';
import Button from '@equalbill/components/controllers/button/button';
import { useRef, useState } from 'react';

const AuthScreen = ({ route }) => {
  const [isLogin, setIsLogin] = useState(route?.params?.isLoggin ? route?.params?.isLoggin : false);
  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState();
  const [verificationId, setVerificationId] = useState();
  const [verificationCode, setVerificationCode] = useState();

  const firebaseConfig = app ? app.options : undefined;
  const [message, showMessage] = useState();
  const [userName, setUserName] = useState('');
  const attemptInvisibleVerification = false;

  return (
    <Box style={{ padding: 20, marginTop: 50 }}>
      <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier} firebaseConfig={app.options} attemptInvisibleVerification={false} />
      {<TextFactory type="h1">{isLogin ? 'Login' : 'Signup'}</TextFactory>}
      {!isLogin && (
        <>
          <Spacer size={36} />
          <ReactiveTextInput
            placeholderTextColor={'#FFFF'}
            textInputStyle={{
              paddingVertical: 5,
              backgroundColor: 'transparent',
              borderColor: '#FFFF',
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 1,
              color: '#FFFF',
            }}
            placeholder="Enter your full name"
            label="Your full name"
            lableStyle={{ color: GlobalColors.Brand.primary }}
            defaultValue={''}
            textContentType="name"
            onEndEditing={e => {
              setUserName(e.nativeEvent.text);
            }}
            autoFocus
            autoComplete="tel"
            keyboardType="phone-pad"
          />
        </>
      )}

      <Spacer size={16} />
      <ReactiveTextInput
        placeholderTextColor={'#FFFF'}
        textInputStyle={{
          paddingVertical: 5,
          backgroundColor: 'transparent',
          borderColor: '#FFFF',
          borderRightWidth: 0,
          borderLeftWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 1,
          color: '#FFFF',
        }}
        placeholder="Enter your phone number"
        label="Phone number"
        lableStyle={{ color: GlobalColors.Brand.primary }}
        defaultValue={''}
        textContentType="telephoneNumber"
        onEndEditing={e => {
          setPhoneNumber(e.nativeEvent.text);
        }}
        autoFocus
        autoComplete="tel"
        keyboardType="phone-pad"
      />
      <Spacer size={16} />

      <Button
        buttonStyle={{
          width: '100%',
          paddingVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 30,
          borderColor: GlobalColors.Brand.primary,
          alignSelf: 'center',
        }}
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
        placeholderTextColor={'#FFFF'}
        textInputStyle={{
          paddingVertical: 5,
          backgroundColor: 'transparent',
          borderColor: '#FFFF',
          borderRightWidth: 0,
          borderLeftWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 1,
        }}
        label="Verification code"
        lableStyle={{ color: GlobalColors.Brand.primary }}
        defaultValue={''}
        textContentType="telephoneNumber"
        onEndEditing={e => {
          setVerificationCode(e.nativeEvent.text);
        }}
        autoFocus
        autoComplete="tel"
        keyboardType="phone-pad"
        editable={!!verificationId}
        placeholder=""
      />
      <Spacer size={16} />

      <Button
        buttonStyle={{
          width: '100%',
          paddingVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 30,
          borderColor: GlobalColors.Brand.primary,
          alignSelf: 'center',
        }}
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
