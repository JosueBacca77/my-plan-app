import PasswordInputText from "./passwordInput/PasswordInputText";
import PrimaryInputText from "./primaryInputText/PrimaryInputText";
import { InputTextProps, InputTextVariant } from "./types";


export default function InputText(InputTextProps: InputTextProps) {

    const { variant, onChangeText, placeholder, size, style, autoCapitalize } = InputTextProps;

    const getTypeInputText = (variant: InputTextVariant | undefined) => {
        switch (variant) {
            case InputTextVariant.PRIMARY:
                return (
                    <PrimaryInputText
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        size={size}
                        style={style}
                        autoCapitalize={autoCapitalize}
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
                        autoCapitalize={autoCapitalize}
                    />
                );
        }
    };
    return getTypeInputText(variant);
}