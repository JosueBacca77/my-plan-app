import { Formik } from "formik"
import { LoginSchema } from "./schemas";
import { LOGIN_TEXT } from "../../../configs/constants/strings";
import { BUTTON_TYPE } from "../../../configs/button";
import FormikInputValue from "../../../components/Formik/FormikInputValue";
import Button from "../../../components/Button/Button";
import { Flex, View } from "native-base";
import { LoginFields } from "./types";
import { StyleSheet } from "react-native";
import { getHP, getWP } from "../../../utils/helpers";
import { InputTextVariant } from "../../../components/InputText/types";

export default function Login() {

    const initialValues = {
        username: '',
        password: '',
    };

    const onSubmit = (data: LoginFields) => {
        console.log('sumbit', data)
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={LoginSchema}
        >
            {({ handleSubmit }) => {
                return (
                    <Flex flex={1} style={styles.loginContainer}>
                        <FormikInputValue
                            placeholder="Usuario"
                            name='username'
                            size="lg"
                        />
                        <FormikInputValue
                            placeholder="Contraseña"
                            name='password'
                            variant={InputTextVariant.PASSWORD}
                            size="lg"
                        />
                        <View style={styles.loginSubmit}>
                        <Button
                            onPress={handleSubmit}
                            text={LOGIN_TEXT}
                            variant={BUTTON_TYPE.SUBMIT}
                        />
                        </View>

                    </Flex>
                )
            }}
        </Formik>
    )
}

const styles = StyleSheet.create({
    loginContainer:{
        marginTop: getHP(20),
        marginHorizontal: getWP(10)
    },
    loginSubmit: {
        marginTop:getHP(10)
    }
})