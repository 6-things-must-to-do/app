import {Auth} from '@stmt/application';
import React from 'react';
import Presenter from './Presenter';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {GoogleSignin} from '@react-native-community/google-signin';
import {GOOGLE_IOS_CLIENT_ID} from '@/constants/string';
import {useDispatch} from 'react-redux';
import {authLogin} from '@/redux/modules/auth/actions';
import {Platform} from 'react-native';
import {globalSetLoading} from '@/redux/modules/global/actions';

const LoginButtons = () => {
  const dispatch = useDispatch();

  const onPressApple = async (): Promise<Auth.SocialData> => {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
    });

    const {email, user, fullName} = appleAuthRequestResponse;
    if (!email) throw new Error('Email is required');

    const ret: Auth.SocialData = {email, id: user, provider: 'apple'};
    if (fullName?.nickname) ret.nickname = fullName.nickname;

    return ret;
  };

  const onPressGoogle = async (): Promise<Auth.SocialData> => {
    GoogleSignin.configure({iosClientId: GOOGLE_IOS_CLIENT_ID});
    const {
      user: {email, name, id, photo}
    } = await GoogleSignin.signIn();
    const ret: Auth.SocialData = {email, id, provider: 'google'};
    if (name) ret.nickname = name;
    if (photo) ret.profileImage = photo;

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

        default:
          throw new Error('Unhandled button');
      }

      dispatch(authLogin(data));
    } catch (e) {
      if ('code' in e) {
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

export default LoginButtons;
