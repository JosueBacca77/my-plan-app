import { StyleSheet } from "react-native";
import { FormFooterProps } from "./types";
import { View } from "native-base";


const FormFooter=(formFooterProps: FormFooterProps)=> {
    const { children } = formFooterProps;

    return(
        <View style={styles.footer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop:20
    }
});

export default FormFooter;