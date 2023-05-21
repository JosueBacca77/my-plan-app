import MainContainer from "../../../components/MainContainer/MainContainer";
import TextsList from "../../../components/TextsList/TextsList";


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
            id:'5',
            name:'Gluteos'
        },
        {
            id:'6',
            name:'Isquiotibiales'
        },
        {
            id:'7',
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

export default MuscularGroups;