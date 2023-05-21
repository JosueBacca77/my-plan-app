import { View, StyleSheet } from "react-native";
import { MainContainerProps } from "./types";


const MainContainer=(mainContainerProps:MainContainerProps)=>{

    const {children} = mainContainerProps;

    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        flex:1,
    },
})

export default MainContainer;