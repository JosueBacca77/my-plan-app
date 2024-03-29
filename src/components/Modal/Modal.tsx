import { Box, Modal as NativeBaseModal, View } from "native-base";
import { ReactNode } from "react";
import { StyleSheet } from "react-native"
import FormFooter from "../FormFooter/FormFooter";
import Button from "../Button/Button";
import { BUTTON_TYPE } from "../../configs/button";

type ModalTypes = {
    modalVisible: boolean,
    setModalVisible: (value: boolean) => void,
    header?: string,
    cancelText?: string,
    submitText?: string,
    onSubmit?: () => void,
    children: ReactNode;
}
const Modal = ({ modalVisible, setModalVisible, header, cancelText, submitText, onSubmit, children }: ModalTypes) => {

    return (
        <NativeBaseModal safeAreaTop={true} isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="flex-end" bottom="4" size="lg">
            <NativeBaseModal.Content style={styles.center}>
                {
                    header &&
                    <NativeBaseModal.CloseButton />
                }
                {
                    header &&
                    <NativeBaseModal.Header>{header}</NativeBaseModal.Header>
                }
                <NativeBaseModal.Body>
                    {children}
                </NativeBaseModal.Body>
                {
                    (cancelText || submitText) &&
                    <NativeBaseModal.Footer>
                        <FormFooter>
                            {
                                cancelText &&
                                <Button
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
                                <Button
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