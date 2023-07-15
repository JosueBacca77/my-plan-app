import { Button as NativeBaseButton, View, useTheme } from "native-base";
import { useState } from "react";
import { ButtonProps } from "./types";
import { BUTTON_TYPE } from "../../configs/button";
import Text from "../Text/Text";
import { FontVariant } from "../Text/types";


export default function Button(primaryButtonProps: ButtonProps) {

    const { text, onPress, variant = BUTTON_TYPE.SUBMIT, width } = primaryButtonProps;

    const theme = useTheme();
    const [isPressed, setIsPressed] = useState(false);
    const buttonColor = variant === BUTTON_TYPE.CANCEL ? theme.colors.primary[50] : theme.colors.primary[500];
    const pressedButtonColor = variant === BUTTON_TYPE.CANCEL ? theme.colors.primary[200] : theme.colors.primary[700];

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    return (
        <View style={{ height: 40 }}>
            <NativeBaseButton
                flex={width ? '' : "1"}
                onPress={() => onPress()}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                style={{
                    backgroundColor: isPressed ? pressedButtonColor : buttonColor,
                    width: width,
                    borderColor: theme.colors.primary[500] ,
                    borderWidth:1
                }}
            >
                <Text
                    value={text}
                    fontColor={variant === BUTTON_TYPE.CANCEL ? theme.colors.primary[500] : theme.colors.primary[50] }
                    fontWeight="bold"
                    variant={FontVariant.TEXT_SM}
                />
            </NativeBaseButton>
        </View>
    )
}