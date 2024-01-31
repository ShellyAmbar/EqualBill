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
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
    <Box style={{ flex: 1 }}>
      <Box style={Styles.background}>
        {/* {[...Array(20).keys()].map(i => (
          <Box key={`box-${i}`} style={[Styles.box, i % 2 === 1 ? Styles.boxOdd : Styles.boxEven]} />
        ))} */}
        <LinearGradient
          colors={[GlobalColors.Brand.fifth, GlobalColors.BgColors.Bg8, GlobalColors.Brand.thierd]}
          style={Styles.background}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0, 0.5, 1]}
        />
      </Box>
      <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier} firebaseConfig={app.options} attemptInvisibleVerification={false} />
      <BlurView intensity={40} style={Styles.blurContainer}>
        <Box>
          {
            <TextFactory style={Styles.title} type="h1">
              {isLogin ? 'Login' : 'Signup'}
            </TextFactory>
          }
          {!isLogin && (
            <>
              <Spacer size={36} />

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
                autoFocus
                autoComplete="tel"
                keyboardType="email-address"
              />
            </>
          )}

          <Spacer size={16} />
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
            autoFocus
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
            autoFocus
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
