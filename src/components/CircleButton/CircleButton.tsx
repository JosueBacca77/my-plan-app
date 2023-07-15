import { Fab, Icon, useTheme } from 'native-base';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { CircleButtonProps } from './types';


export default function CircleAddButton(circleAddButtonProps: CircleButtonProps) {

  const { onPress } = circleAddButtonProps;

  const [isPressed, setIsPressed] = useState(false);

  const theme = useTheme();

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Fab
      placement="bottom-right"
      size="sm"
      icon={<Icon as={Ionicons} name="add" size="lg" />}
      renderInPortal={false}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={{
        backgroundColor: isPressed ? theme.colors.primary[700] : theme.colors.primary[500],
      }}
    />
  );
};