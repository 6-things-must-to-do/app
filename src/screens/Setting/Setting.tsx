import {StackProps} from '@stmt/navigation';
import {SettingStackParam} from '@/navigations/SettingStack';
import React from 'react';
import Presenter from './Presenter';
import withPadding from '@/hocs/withPadding';

const Setting = (props: StackProps<SettingStackParam, 'Setting'>) => {
  const {navigation} = props;

  const onUpdateUser = () => {
    navigation.navigate('UpdateUser');
  };

  const onAlert = () => {
    navigation.navigate('TaskRelatedSetting');
  };

  const onClickItem = (type: 'update' | 'task') => () => {
    switch (type) {
      case 'update':
        onUpdateUser();
        return;
      case 'task':
        onAlert();
        return;
    }
  };

  return <Presenter onClickItem={onClickItem} />;
};

export default withPadding(Setting);
