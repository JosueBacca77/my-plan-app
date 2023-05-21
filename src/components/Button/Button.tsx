import { Button as NativeBaseButton, useTheme } from "native-base";
import { useState } from "react";
import { ButtonProps } from "./types";
import { BUTTON_TYPE } from "../../configs/button";


export default function Button(primaryButtonProps: ButtonProps){

    const {text, onPress, variant=BUTTON_TYPE.SUBMIT, width} = primaryButtonProps;

    const theme = useTheme();
    const [isPressed, setIsPressed] = useState(false);
    const buttonColor = variant === BUTTON_TYPE.CANCEL ? theme.colors.primary[100] : theme.colors.primary[500];
    const pressedButtonColor = variant === BUTTON_TYPE.CANCEL ? theme.colors.primary[200] : theme.colors.primary[700];
  
    const handlePressIn = () => {
        setIsPressed(true);
      };
    
      const handlePressOut = () => {
        setIsPressed(false);
      };

    return(
        <NativeBaseButton 
            flex={width ? '' : "1"} 
            onPress={()=>onPress()}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={{
                backgroundColor: isPressed ? pressedButtonColor : buttonColor,
                width:width,
            }}
        >
            {text}
        </NativeBaseButton>
    )
}