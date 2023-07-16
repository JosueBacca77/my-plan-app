import MainContainer from "../../../components/MainContainer/MainContainer";
import { exercises, muscularGroups } from "../../../data";
import ExercisesContent from "./ExercisesContent";

const Exercises=()=>{

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