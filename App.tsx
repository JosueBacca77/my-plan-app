import { StyleSheet, View, SafeAreaView } from "react-native"
import { NativeBaseProvider } from "native-base";
import genesisTheme from "./src/themes/genesis";
import MainRouter from "./src/MainRouter";

const Root = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NativeBaseProvider theme={genesisTheme}>
                <View style={{ flex: 1 }}>
                    <MainRouter />
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