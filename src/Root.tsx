import { View } from "react-native"
import Constants from 'expo-constants'
import TrainerHome from "./screens/trainer/TrainerHome";


const Root=()=>{
    return(
        <View style={{ marginTop: Constants.statusBarHeight, flex:1}}>
            <TrainerHome />
        </View>
    )
}

export default Root;