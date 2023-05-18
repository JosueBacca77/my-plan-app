import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

type MainContainerTypes = {
    children: ReactNode;
}

const MainContainer=({children}:MainContainerTypes)=>{
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