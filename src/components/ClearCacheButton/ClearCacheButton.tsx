import ConfirmModal from '@/components/ConfirmModal';
import StyledListItem from '@/components/StyledListItem';
import {authReset} from '@/redux/modules/auth/actions';
import {globalSetError, globalSetLoading} from '@/redux/modules/global/actions';
import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

const ClearCacheButton = () => {
  const [isModalOn, setIsModalOn] = useState(false);
  const dispatch = useDispatch();

  const onClick = () => {
    setIsModalOn(true);
  };

  const onCancel = () => {
    setIsModalOn(false);
  };

  const onConfirm = async () => {
    dispatch(globalSetLoading(true));
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      dispatch(authReset());
    } catch (error) {
      dispatch(globalSetError(error));
      console.error('Error clearing app data.');
    } finally {
      dispatch(globalSetLoading(false));
    }
  };

  return (
    <>
      <StyledListItem
        title="Clear cache"
        description="Clear application cache, it makes user logout"
        onPress={onClick}
      />
      <ConfirmModal
        information="Are you sure you want to clear hole data in application? It makes you logged out."
        useCancelButton
        onCancel={onCancel}
        onConfirm={onConfirm}
        isVisible={isModalOn}
      />
    </>
  );
};
export default ClearCacheButton;
