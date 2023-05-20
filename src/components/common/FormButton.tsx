import { Button, useTheme } from "native-base";
import { BUTTON_TYPE } from "../../configs/enums";
import { useState } from "react";

type PrimaryButtonTypes = {
    text:string,
    onPress:any,
    variant: BUTTON_TYPE,
    width?:number
}

const FormButton =({text, onPress, variant=BUTTON_TYPE.SUBMIT, width}: PrimaryButtonTypes)=>{

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
        <Button 
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
        </Button>
    )
}

export default FormButton;