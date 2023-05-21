import { useField } from "formik";
import { Input, View } from "native-base";
import Text from "../Text/Text";
import { FormikInputProps } from "./types";
import { FontVariant } from "../Text/types";

export default function FormikInputValue(formikInputProps: FormikInputProps) {

    const { name, placeholder } = formikInputProps;

    const [field, meta, helpers] = useField(name);

    return (
        <View
            style={{ flexDirection: 'column' }}
        >
            <Input
                onChangeText={(value) => helpers.setValue(value)}
                value={field.value}
                placeholder={placeholder}
            />
            {meta.error &&
                <View style={{ paddingLeft: 10 }}>
                    <Text
                        variant={FontVariant.TEXT_XS}
                        fontColor="#DC143C"
                        value={meta.error}
                    />
                </View>

            }
        </View>
    )
}