import { ViewStyle } from "react-native";

export enum InputTextVariant {
    PRIMARY,
    PASSWORD
}

export interface InputTextProps {
    onChangeText?:(value:string)=>void;
    placeholder:string;
    variant?: InputTextVariant;
    size?: string;
    style?: ViewStyle;
    autoCapitalize?: 'characters' | 'none' | 'senteces' | 'words';
}