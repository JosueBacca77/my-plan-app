import { StyleSheet, Text, View } from "react-native";

const TextListItem=({text}:{text:string})=>{
    return (
        <View
            style={styles.textItemContainer}
        >
            <Text
                style={styles.textItem}
            >
                {text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textItemContainer:{
        width:150,

    },
    textItem:{
        paddingVertical:20,
        textAlign:'left',
    },
})

export default TextListItem;