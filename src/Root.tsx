import { View } from "react-native"
import Constants from 'expo-constants'
import TrainerHome from "./screens/trainer/TrainerHome";
import { NativeBaseProvider, Box } from "native-base";

const Root=()=>{
    return(
        <NativeBaseProvider>
            <View style={{ marginTop: Constants.statusBarHeight, flex:1}}>
                <TrainerHome />
            </View>
        </NativeBaseProvider>

    )
}

export default Root;