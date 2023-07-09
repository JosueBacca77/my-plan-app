import MainContainer from "../../../components/MainContainer/MainContainer";
import ExercisesContent from "./ExercisesContent";

const Exercises=()=>{

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

    const exercises = [
        {
            id:'1',
            name:'Press de banca',
            muscularGroup:'1'
        },
        {
            id:'2',
            name:'Press de banca inclinado',
            muscularGroup:'1'
        },
        {
            id:'3',
            name:'Apertura en polea',
            muscularGroup:'1'
        },
    ]
    return (
        <MainContainer>
            <ExercisesContent 
                exercises={exercises}
                muscularGroups={muscularGroups}
            />
        </MainContainer>
    )
}

export default Exercises;