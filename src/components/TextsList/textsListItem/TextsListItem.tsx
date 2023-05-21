import { StyleSheet, Text, View } from "react-native";
import { TextsListItemProps } from "./types";

export default function TextsListItem(textsListItemProps:TextsListItemProps){

    const { text } = textsListItemProps;

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