import { Formik } from "formik"
import { LoginSchema } from "./schemas";
import { LOGIN_TEXT } from "../../../configs/constants/strings";
import { BUTTON_TYPE } from "../../../configs/button";
import FormikInputValue from "../../../components/Formik/FormikInputValue";
import Button from "../../../components/Button/Button";
import { Flex, View, useToast } from "native-base";
import { LoginFields } from "./types";
import { StyleSheet } from "react-native";
import { getHP, getWP } from "../../../utils/helpers";
import { InputTextVariant } from "../../../components/InputText/types";
import { ReactNavigationProps } from "../../../lib/ReactNavigation/types";
import useUserStore from "../useUserStore";
import ToastAlert from "../../../components/Toast/ToastAlert";


export default function Login(navigationProps: ReactNavigationProps) {

    const { navigation } = navigationProps;

    const { setUser } = useUserStore();

    const initialValues = {
        username: '',
        password: '',
    };

    const toast = useToast();

    const onSubmit = (data: LoginFields) => {
        if (data.username === 'student' && data.password === 'Test1234$') {
            setUser(false);
            navigation.navigate('PrivateRouter');
            return
        }
        if (data.username === 'trainer' && data.password === 'Test1234$') {
            setUser(true);
            navigation.navigate('PrivateRouter');
            return
        }

        toast.show({
            render: ({
                id
              }) => {
                return (
                    <ToastAlert
                        id={id}
                        status=''
                        variant='subtle'
                        title='Wrong credentials'
                        description='Verify your user and password'
                        isClosable={true}
                        toast={toast}

                    />
                )
            }
        })
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
                            placeholder="User"
                            name='username'
                            size="lg"
                            autoCapitalize="none"
                        />
                        <FormikInputValue
                            placeholder="Password"
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
    loginContainer: {
        marginTop: getHP(20),
        marginHorizontal: getWP(10)
    },
    loginSubmit: {
        marginTop: getHP(6)
    }
})