import { Modal as NativeBaseModal } from "native-base";
import { ReactNode } from "react";
import { StyleSheet } from "react-native"
import { BUTTON_TYPE } from "../../configs/enums";
import FormButton from "./FormButton";
import FormFooter from "./FormFooter/FormFooter";

type ModalTypes = {
    modalVisible: boolean,
    setModalVisible: (value: boolean) => void,
    header: string,
    cancelText?: string,
    submitText?: string,
    onSubmit?: () => void,
    children: ReactNode;
}
const Modal = ({ modalVisible, setModalVisible, header, cancelText, submitText, onSubmit, children }: ModalTypes) => {

    return (
        <NativeBaseModal safeAreaTop={true} isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="flex-end" bottom="4" size="lg">
            <NativeBaseModal.Content style={styles.center}>
                <NativeBaseModal.CloseButton />
                <NativeBaseModal.Header>{header}</NativeBaseModal.Header>
                <NativeBaseModal.Body>
                    {children}
                </NativeBaseModal.Body>
                {
                    (cancelText || submitText) &&
                    <NativeBaseModal.Footer>
                        <FormFooter>
                            {
                                cancelText &&
                                <FormButton
                                    onPress={() =>
                                        setModalVisible(false)
                                    }
                                    text={cancelText}
                                    variant={BUTTON_TYPE.CANCEL}
                                    width={100}
                                />
                            }
                            {
                                submitText &&
                                <FormButton
                                    onPress={onSubmit}
                                    text={submitText}
                                    variant={BUTTON_TYPE.SUBMIT}
                                    width={100}
                                />
                            }
                        </FormFooter>
                    </NativeBaseModal.Footer>
                }
            </NativeBaseModal.Content>
        </NativeBaseModal>
    )
}

const styles = StyleSheet.create({
    center: {
        marginBottom: 'auto',
        marginTop: 'auto'
    },
});

export default Modal;