import { Modal as NativeBaseModal, View } from "native-base";
import { ReactNode } from "react";
import {StyleSheet} from "react-native"
import { BUTTON_TYPE } from "../../configs/enums";
import FormButton from "./FormButton";

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
        <NativeBaseModal safeAreaTop={true} isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="flex-end" bottom="4" size="lg">
            <NativeBaseModal.Content style={styles.center}>
                <NativeBaseModal.CloseButton />
                <NativeBaseModal.Header>{header}</NativeBaseModal.Header>
                <NativeBaseModal.Body>
                    {children}
                </NativeBaseModal.Body>
                <NativeBaseModal.Footer>
                    <View style={styles.footer}>
                        <FormButton
                            onPress={() =>
                                setModalVisible(false)
                            }
                            text={cancelText}
                            variant={BUTTON_TYPE.CANCEL}
                            width={100}
                        />
                        <FormButton 
                            onPress={() => 
                                setModalVisible(true)
                            }
                            text={submitText}
                            variant={BUTTON_TYPE.SUBMIT}
                            width={100}
                        />
                    </View>
                </NativeBaseModal.Footer>
            </NativeBaseModal.Content>
        </NativeBaseModal>
    )
}

const styles = StyleSheet.create({
    center: {
        marginBottom:'auto',
        marginTop:'auto'
    },
    footer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly'
    }
});

export default Modal;