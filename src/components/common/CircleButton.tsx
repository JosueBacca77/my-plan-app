import { Fab, Icon, useTheme } from 'native-base';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';


const CircleAddButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <Fab
      placement="bottom-right"
      size="sm"
      icon={<Icon as={Ionicons} name="add" size="lg"/>}
      renderInPortal={false}
    />
  );
};

export default CircleAddButton;