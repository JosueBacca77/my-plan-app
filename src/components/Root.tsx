import { Text, View } from "react-native"
import Constants from 'expo-constants'


const Root=()=>{
    return(
        <View style={{ marginTop: Constants.statusBarHeight, flex:1}}>
            <Text>
                Welcome to My Plan 
            </Text>
        </View>
        
    )
}

export default Root;