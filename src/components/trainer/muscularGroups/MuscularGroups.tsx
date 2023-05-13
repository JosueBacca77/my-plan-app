import { View, Text, FlatList, StyleSheet } from "react-native";
import MainContainer from "../../common/MainContainer";
import TextListItem from "../../common/TextListItem";
import TextsList from "../../common/TextsList";

const MuscularGroups=()=>{

    const muscularGroups = [
        {
            id:'1',
            name:'Pecho'
        },
        {
            id:'2',
            name:'Espalda'
        },
        {
            id:'3',
            name:'Hombros'
        },
        {
            id:'4',
            name:'Cuádriceps'
        },
        {
            id:'1',
            name:'Gluteos'
        },
        {
            id:'1',
            name:'Isquiotibiales'
        },
        {
            id:'1',
            name:'Abdomen'
        },
    ]
    return (
        <MainContainer>
            <TextsList 
                data={muscularGroups}
                numColumns={2}
                itemPropertyText={'name'}
            />
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    columnWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
})

export default MuscularGroups;