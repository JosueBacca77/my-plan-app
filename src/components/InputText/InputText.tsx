import PasswordInputText from "./passwordInput/PasswordInputText";
import PrimaryInputText from "./primaryInputText/PrimaryInputText";
import { InputTextProps, InputTextVariant } from "./types";


export default function InputText(InputTextProps: InputTextProps) {

    const { variant, onChangeText, placeholder, size, style } = InputTextProps;

    const getTypeInputText = (variant: InputTextVariant | undefined) => {
        switch (variant) {
            case InputTextVariant.PRIMARY:
                return (
                    <PrimaryInputText
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        size={size}
                        style={style}
                    />
                );
            case InputTextVariant.PASSWORD:
                return (
                    <PasswordInputText
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        size={size}
                        style={style}
                    />
                );
            default:
                return (
                    <PrimaryInputText
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        size={size}
                        style={style}
                    />
                );
        }
    };
    return getTypeInputText(variant);
}