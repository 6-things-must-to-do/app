import {Auth} from '@stmt/application';
import React from 'react';
import Presenter from './Presenter';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {GoogleSignin, statusCodes} from 'react-native-google-signin';
import {GOOGLE_IOS_CLIENT_ID} from '@/constants/string';
import {useDispatch} from 'react-redux';
import {authLogin} from '@/redux/modules/auth/actions';
import {Platform} from 'react-native';
import {globalSetLoading} from '@/redux/modules/global/actions';

const LoginButton = () => {
  const dispatch = useDispatch();

  const onPressApple = async (): Promise<Auth.SocialData> => {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
    });

    console.log(appleAuthRequestResponse);

    const {email, user, fullName} = appleAuthRequestResponse;
    if (!email) throw new Error('Email is required');

    const ret: Auth.SocialData = {email, id: user};
    if (fullName?.nickname) ret.nickname = fullName.nickname;

    return ret;
  };

  const onPressGoogle = async (): Promise<Auth.SocialData> => {
    GoogleSignin.configure({iosClientId: GOOGLE_IOS_CLIENT_ID});
    const {
      user: {email, name, id}
    } = await GoogleSignin.signIn();
    const ret: Auth.SocialData = {email, id};
    if (name) ret.nickname = name;

    return ret;
  };

  const onClickButton = (type: Auth.Provider) => async () => {
    dispatch(globalSetLoading(true));
    let data: Auth.SocialData;

    try {
      switch (type) {
        case 'apple': {
          data = await onPressApple();
          break;
        }
        case 'google': {
          data = await onPressGoogle();
          break;
        }
      }
      if (!data) throw new Error('Unhandled button');

      dispatch(authLogin(type, data));
    } catch (e) {
      console.log(e);
      if (e.code === statusCodes.SIGN_IN_CANCELLED) {
        dispatch(globalSetLoading(false));
      }
    }
  };

  return (
    <Presenter
      unableAppleAuth={appleAuth.isSupported && Platform.OS === 'ios'}
      onClickButton={onClickButton}
    />
  );
};

export default LoginButton;
