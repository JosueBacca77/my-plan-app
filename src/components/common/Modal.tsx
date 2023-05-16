import { Button, Modal as NativeBaseModal } from "native-base";
import { ReactNode } from "react";

type ModalTypes = {
    modalVisible:boolean, 
    setModalVisible: (value:boolean)=> void, 
    header: string, 
    cancelText: string, 
    submitText: string,
    children: ReactNode;
}
const Modal =({modalVisible, setModalVisible, header, cancelText, submitText, children}: ModalTypes)=>{

    return(
        <NativeBaseModal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="flex-end" bottom="4" size="lg">
            <NativeBaseModal.Content>
            <NativeBaseModal.CloseButton />
            <NativeBaseModal.Header>{header}</NativeBaseModal.Header>
            <NativeBaseModal.Body>
                {children}
            </NativeBaseModal.Body>
            <NativeBaseModal.Footer>
                <Button flex="1" onPress={() => {
                    setModalVisible(false);
                }}>
                    {cancelText}
                </Button>
                <Button flex="1" onPress={() => {
                    setModalVisible(true);
                }}>
                    {submitText}
                </Button>
            </NativeBaseModal.Footer>
            </NativeBaseModal.Content>
        </NativeBaseModal>
    )
}

export default Modal;