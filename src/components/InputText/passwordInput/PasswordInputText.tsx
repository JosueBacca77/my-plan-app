import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Flex, Input } from "native-base";
import { PasswordInputTextProps } from "./types";
import { Feather } from '@expo/vector-icons';


export default function PasswordInputText(passwordProps: PasswordInputTextProps) {
    const { onChangeText, placeholder, size } = passwordProps;
    const [currentValue, setCurrentValue] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleChangeText = (value: string) => {
        setCurrentValue(value);
        if (onChangeText) onChangeText(value);
    };

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <Flex
            flexDirection='row'
            alignItems='center'
            style={{
                height: 40,
                borderBottomColor: '#aeaeae',
                borderBottomWidth: 1,
            }}
        >
            <Input
                variant="unstyled"
                secureTextEntry={!showPassword}
                placeholder={placeholder}
                onChangeText={handleChangeText}
                value={currentValue}
                size={size}
                autoCapitalize='none'
                style={{ paddingLeft: 10 }}
                InputRightElement={
                    <TouchableOpacity
                        onPress={toggleShowPassword}
                    >
                        {
                            showPassword ?
                                <Feather name="eye" size={24} color="black" /> :
                                <Feather name="eye-off" size={24} color="black" />}
                    </TouchableOpacity>
                }
            />
        </Flex>
    );
}