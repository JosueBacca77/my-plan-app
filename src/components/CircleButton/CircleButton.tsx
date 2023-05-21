import { Fab, Icon } from 'native-base';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { CircleButtonProps } from './types';


export default function CircleAddButton(circleAddButtonProps: CircleButtonProps) {

  const { onPress } = circleAddButtonProps
  return (
    <Fab
      placement="bottom-right"
      size="sm"
      icon={<Icon as={Ionicons} name="add" size="lg"/>}
      renderInPortal={false}
      onPress={onPress}
    />
  );
};