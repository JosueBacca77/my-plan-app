import { View } from "native-base";
import { Formik } from 'formik';
import { NewExersiceSchema } from "./../schemas";
import FormikInputValue from "../../../common/formik/FormikInputValue";
import FormFooter from "../../../common/FormFooter/FormFooter";
import FormButton from "../../../common/FormButton";
import { BUTTON_TYPE } from "../../../../configs/enums";
import { CANCEL_TEXT, SUBMIT_TEXT } from "../../../../constants/strings";
import { NewExerciseProps } from "./types";
import { StyleSheet } from "react-native";

const NewExerciseForm = (newExerciseFormProps:NewExerciseProps) => {

    const { onSubmit, onCancel } = newExerciseFormProps;

    const initialValues = {
        name: ''
    }

    return (
        <View style={styles.form}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={NewExersiceSchema}
            >
                {({ handleSubmit }) => {
                    return (
                        <View>
                            <FormikInputValue
                                placeholder="Nombre"
                                name='name'
                            />
                            <FormFooter>
                                    <FormButton
                                        onPress={onCancel}
                                        text={CANCEL_TEXT}
                                        variant={BUTTON_TYPE.CANCEL}
                                        width={100}
                                    />
                                    <FormButton
                                        onPress={handleSubmit}
                                        text={SUBMIT_TEXT}
                                        variant={BUTTON_TYPE.SUBMIT}
                                        width={100}
                                    />
                            </FormFooter>
                        </View>
                    )
                }}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        flex:1
    },
});

export default NewExerciseForm;