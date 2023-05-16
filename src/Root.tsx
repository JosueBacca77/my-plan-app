import { View } from "react-native"
import Constants from 'expo-constants'
import TrainerHome from "./screens/trainer/TrainerHome";
import { NativeBaseProvider } from "native-base";
import genesisTheme from "./themes/genesis";

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