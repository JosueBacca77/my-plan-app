import { View } from "react-native"
import Constants from 'expo-constants'
import { NativeBaseProvider } from "native-base";
import genesisTheme from "./themes/genesis";
import TrainerHome from "./features/trainer/TrainerHome";

const Root=()=>{
    return(
        <NativeBaseProvider theme={genesisTheme}>
            <View style={{ marginTop: Constants.statusBarHeight, flex:1}}>
                <TrainerHome />
            </View>
        </NativeBaseProvider>
    )
}

export default Root;