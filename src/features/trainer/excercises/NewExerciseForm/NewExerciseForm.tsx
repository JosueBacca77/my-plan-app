import { Flex } from "native-base";
import { Formik } from 'formik';
import { NewExerciseSchema } from "../schemas";
import Button from "../../../../components/Button/Button";
import { BUTTON_TYPE } from "../../../../configs/button";
import { CANCEL_TEXT, SUBMIT_TEXT } from "../../../../configs/constants/strings";
import { NewExerciseProps } from "./types";
import FormikInputValue from "../../../../components/Formik/FormikInputValue";
import FormFooter from "../../../../components/FormFooter/FormFooter";


const NewExerciseForm = (newExerciseFormProps:NewExerciseProps) => {

    const { onSubmit, onCancel } = newExerciseFormProps;

    const initialValues = {
        name: ''
    }

    return (
        <Flex flex={1}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={NewExerciseSchema}
            >
                {({ handleSubmit }) => {
                    return (
                        <Flex>
                            <FormikInputValue
                                placeholder="Name"
                                name='name'
                            />
                            <FormFooter>
                                    <Button
                                        onPress={onCancel}
                                        text={CANCEL_TEXT}
                                        variant={BUTTON_TYPE.CANCEL}
                                        width={100}
                                    />
                                    <Button
                                        onPress={handleSubmit}
                                        text={SUBMIT_TEXT}
                                        variant={BUTTON_TYPE.SUBMIT}
                                        width={100}
                                    />
                            </FormFooter>
                        </Flex>
                    )
                }}
            </Formik>
        </Flex>
    )
}

export default NewExerciseForm;