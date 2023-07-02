import { PrimaryInputTextProps } from "./types";
import { useState } from "react";
import { Input } from "native-base";


export default function PrimaryInputText(primaryProps: PrimaryInputTextProps) {
    const { onChangeText, placeholder, size } = primaryProps;

    const [currentvalue, setCurrentValue] = useState<string>('')

    const handleChangeText = (value: string) => {
        setCurrentValue(value)
        if (onChangeText) onChangeText(value)
    };

    return (
        <Input
            variant="underlined"
            onChangeText={handleChangeText}
            placeholder={placeholder}
            value={currentvalue}
            size={size}
            style={{ paddingLeft: 10 }}
        />
    )
}