import MainContainer from "../../../components/MainContainer/MainContainer";
import TextsList from "../../../components/TextsList/TextsList";
import { muscularGroups } from "../../../data";


const MuscularGroups=()=>{

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