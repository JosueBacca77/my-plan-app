import { Select, useTheme } from "native-base";
import {StyleSheet, View} from "react-native"
import { MuscularGroup } from "../../../interfaces/MuscularGroup.interface";
import { Exercise } from "../../../interfaces/Exercise.interface";
import { useState } from "react";
import NewExerciseForm from "./NewExerciseForm/NewExerciseForm";
import { NEW_EXERCISE } from "../../../configs/constants/strings";
import Modal from "../../../components/Modal/Modal";
import TextsList from "../../../components/TextsList/TextsList";
import CircleAddButton from "../../../components/CircleButton/CircleButton";


type ExercisesContentTypes = {
    muscularGroups: MuscularGroup[], 
    exercises: Exercise[]
}

const  ExercisesContent=({muscularGroups, exercises}:ExercisesContentTypes)=>{

    const [modalVisible, setModalVisible] = useState(false);

    const { colors } = useTheme();

    const [muscularGroupSelected, setMuscularGroupSelected] = useState<string>('')

    const handleMuscularGroupChange = (mg: string) => {
        setMuscularGroupSelected(mg);
    };

    const handleCancel= () => {
        setModalVisible(false);
    };

    const handleSubmit= (data:any) => {
        //SAVE EXERCISE
    };

    return (
        <View
            style={styles.exercisesContent}
        >
            <Modal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                header={NEW_EXERCISE}
            >
                <NewExerciseForm 
                    onCancel={handleCancel}
                    onSubmit={handleSubmit}
                />
            </Modal>
            <Select selectedValue={muscularGroupSelected} accessibilityLabel="Grupo muscular" placeholder="Grupo muscular" _selectedItem={{
                bg: colors.primary[500]
                }} mt={1} onValueChange={handleMuscularGroupChange}>
            {
                muscularGroups.map((group: MuscularGroup)=>(
                    <Select.Item key={group.name} label={group.name} value={group.name} />
                ))
            }
            </Select>
            <TextsList
                data={exercises}
                numColumns={2}
                itemPropertyText={'name'}
            />
            <CircleAddButton 
                onPress={()=>setModalVisible(true)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    exercisesContent:{
        gap:10,
        flex:1,
    },
})

export default ExercisesContent;