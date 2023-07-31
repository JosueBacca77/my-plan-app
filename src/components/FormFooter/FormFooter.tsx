import { StyleSheet } from "react-native";
import { FormFooterProps } from "./types";
import { Flex } from "native-base";


const FormFooter=(formFooterProps: FormFooterProps)=> {
    const { children } = formFooterProps;

    return(
        <Flex style={styles.footer} flex={1} flexDirection={'row'}>
            {children}
        </Flex>
    )
}

const styles = StyleSheet.create({
    footer: {
        justifyContent: 'space-evenly',
        paddingTop:20
    }
});

export default FormFooter;