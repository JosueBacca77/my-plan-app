import { Button as NativeBaseButton, View, useTheme } from "native-base";
import { ButtonProps } from "./types";
import Text from "../Text/Text";


export default function SecondaryButton(primaryButtonProps: ButtonProps) {

    const { text, onPress, width } = primaryButtonProps;

    const theme = useTheme();

    return (
        <View style={{height:44,justifyContent:'center'}}>
            
            <NativeBaseButton
                onPress={() => onPress()}
                style={{
                    width: width,
                    borderRadius: 20,
                    // backgroundColor:theme.colors.secondary[100],
                    backgroundColor:'#F6E9C3'
                }}
            >
                <Text 
                    value={text}
                    // fontColor={theme.colors.primary[50]}
                    fontColor="#333"
                    fontWeight="bold"
                />
            </NativeBaseButton>
        </View>
    )
}