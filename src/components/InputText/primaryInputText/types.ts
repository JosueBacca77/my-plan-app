import { ViewStyle } from "react-native";

export interface PrimaryInputTextProps {
    onChangeText?:(value:string)=>void,
    placeholder:string;
    size?: string;
    style?: ViewStyle
}