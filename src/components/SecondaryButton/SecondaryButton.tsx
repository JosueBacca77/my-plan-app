import { Button as NativeBaseButton, View, useTheme } from "native-base";
import { ButtonProps } from "./types";
import Text from "../Text/Text";
import { useState } from "react";


export default function SecondaryButton(primaryButtonProps: ButtonProps) {

    const { text, onPress, width } = primaryButtonProps;

    const theme = useTheme();

    const [isPressed, setIsPressed] = useState(false);


    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    return (
        <View style={{height:44,justifyContent:'center'}}>
            
            <NativeBaseButton
                onPress={() => onPress()}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                style={{
                    width: width,
                    backgroundColor: isPressed ? theme.colors.secondary[700]:theme.colors.secondary[500]
                }}
            >
                <Text 
                    value={text}
                    fontColor="#333"
                    fontWeight="bold"
                />
            </NativeBaseButton>
        </View>
    )
}