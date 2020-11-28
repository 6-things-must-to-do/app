import React, {ReactNode} from 'react';
import {Style} from '@stmt/application';
import styled from 'styled-components/native';
import Modal, {ModalProps} from 'react-native-modal';
import StyledText from '../StyledText';
import StyledView from '../StyledView';
import useTheme from '@/hooks/useTheme';

export interface ConfirmModalProps extends Partial<ModalProps> {
  onConfirm?: () => void;
  onCancel?: () => void;
  informationBox?: ReactNode;
  information?: string;
  useCancelButton?: boolean;
  confirmText?: string;
  cancelText?: string;
  confirmColor?: keyof Style.DimensionTheme;
  confirmTextColor?: keyof Style.TextTheme;
  cancelColor?: keyof Style.DimensionTheme;
  cancelTextColor?: keyof Style.TextTheme;
}

const ConfirmModal = (props: ConfirmModalProps) => {
  const theme = useTheme();
  const {
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    information,
    onConfirm,
    onCancel,
    useCancelButton = true,
    cancelColor = 'outfocus',
    confirmTextColor = 'success',
    confirmColor = 'secondary',
    cancelTextColor = 'default',
    informationBox,
    ...modalProps
  } = props;

  return (
    <Modal {...modalProps}>
      <Wrapper>
        {informationBox ? (
          <Custom>{informationBox}</Custom>
        ) : (
          <InformationBox>
            <StyledText>{information}</StyledText>
          </InformationBox>
        )}
        <ChoiceBox bgColor={theme.contrast}>
          <Choice bgColor={theme[confirmColor]} onPress={onConfirm}>
            <StyledText color={confirmTextColor}>{confirmText}</StyledText>
          </Choice>
          {useCancelButton ? (
            <Choice bgColor={theme[cancelColor]} onPress={onCancel}>
              <StyledText color={cancelTextColor}>{cancelText}</StyledText>
            </Choice>
          ) : null}
        </ChoiceBox>
      </Wrapper>
    </Modal>
  );
};

export default ConfirmModal;

const Wrapper = styled(StyledView)`
  align-items: center;
  min-height: 25%;
  border-radius: 16px;
  overflow: hidden;
`;

const Custom = styled.View`
  padding: 16px;
  flex: 3;
`;

const InformationBox = styled(Custom)`
  justify-content: center;
  align-items: center;
`;

const ChoiceBox = styled.View<{bgColor: string}>`
  ${(props) => `
    flex: 2;
    width: 100%;
    flex-direction: row;
    background-color: ${props.bgColor};
`}
`;

const Choice = styled.TouchableOpacity<{bgColor: string}>`
  ${(props) => `
    flex: 1;
    align-items: center;
    background-color: ${props.bgColor}
    justify-content: center;
`}
`;
