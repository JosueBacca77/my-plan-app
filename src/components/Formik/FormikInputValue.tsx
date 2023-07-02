import { useField } from "formik";
import { View } from "native-base";
import Text from "../Text/Text";
import { FormikInputProps } from "./types";
import { FontVariant } from "../Text/types";
import { StyleSheet } from "react-native";
import { InputTextVariant } from "../InputText/types";
import InputText from "../InputText/InputText";

export default function FormikInputValue(formikInputProps: FormikInputProps) {

    const { name, placeholder, variant, size } = formikInputProps;

    const [field, meta, helpers] = useField(name);

    return (
        <View
            style={styles.inputContainer}
        >
            <InputText
                onChangeText={(value) => helpers.setValue(value)}
                placeholder={placeholder}
                style={styles.formikInput}
                variant={variant ?? InputTextVariant.PRIMARY}
                size={size}
            />
            {meta.error &&
                <View style={styles.error}>
                    <Text
                        variant={FontVariant.TEXT_10}
                        fontColor="#DC143C"
                        value={meta.error}
                    />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    formikInput:{
    },
    inputContainer: {
        position: 'relative',
        marginBottom: 26
    },
    error: {
        position: 'absolute',
        left: 4,
        bottom: -20
    }
})