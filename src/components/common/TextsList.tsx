import { FlatList, StyleSheet } from "react-native";
import TextListItem from "./TextListItem";

type TextsListTypes = {
    data: any[], 
    numColumns:number, 
    itemPropertyText:string
}

const TextsList=({data, numColumns=2, itemPropertyText }:TextsListTypes)=>{
    return (
        <FlatList
            data={data}
            numColumns={numColumns}
            columnWrapperStyle={styles.columnWrapper}
            renderItem={({item})=>(
                <TextListItem 
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

export default TextsList;