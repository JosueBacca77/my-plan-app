import { FlatList, StyleSheet } from "react-native";
import TextsListItem from "./textsListItem/TextsListItem";
import { TextsListProps } from "./types";


export default function TextsList(textsListProps:TextsListProps){

    const {data, numColumns=2, itemPropertyText } = textsListProps;

    return (
        <FlatList
            data={data}
            numColumns={numColumns}
            columnWrapperStyle={styles.columnWrapper}
            renderItem={({item})=>(
                <TextsListItem
                    text={item[itemPropertyText]}
                />
            )}
        >
        </FlatList>
    )
}

const styles = StyleSheet.create({
    columnWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:6
    },
})