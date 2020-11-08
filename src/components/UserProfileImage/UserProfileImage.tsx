import useTheme from '@/hooks/useTheme';
import mergeStyle from '@/utils/mergeStyle';
import {RootStore, UserState} from '@stmt/redux-store';
import React from 'react';
import {Image, ImageProps, ImageStyle, StyleProp} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

interface Props extends Omit<ImageProps, 'source'> {
  size?: number;
}

const UserProfileImage = (props: Props) => {
  const {size = 60, style: styleProps, ...imageProps} = props;
  const {profileImage} = useSelector<RootStore, UserState>(
    (store) => store.user
  );
  const theme = useTheme();

  const imageSize = size;

  const imageStyle: StyleProp<ImageStyle> = {
    width: imageSize,
    height: imageSize,
    borderRadius: size / 2
  };

  if (!profileImage) {
    return (
      <FontAwesome5Icon
        name="user-circle"
        size={imageSize}
        color={theme.contrast}
      />
    );
  }

  let style = imageStyle;
  if (styleProps) style = mergeStyle([imageStyle], [styleProps]);

  return (
    <Image
      {...imageProps}
      source={{uri: profileImage}}
      style={style}
      width={imageSize}
      height={imageSize}
    />
  );
};

export default UserProfileImage;
