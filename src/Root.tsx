import { StyleSheet, View, SafeAreaView } from "react-native"
import { NativeBaseProvider } from "native-base";
import genesisTheme from "./themes/genesis";
import TrainerHome from "./features/trainer/TrainerHome";

const Root = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NativeBaseProvider theme={genesisTheme}>
                <View style={{ flex: 1 }}>
                    <TrainerHome />
                </View>
            </NativeBaseProvider>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Root;