import { ViewStyle } from "react-native";

export interface PasswordInputTextProps {
    onChangeText?:(value:string)=>void,
    placeholder:string;
    size?: string;
    style?: ViewStyle
}